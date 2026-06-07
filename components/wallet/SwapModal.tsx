"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { Coins, ArrowRightLeft } from "lucide-react";
import { useWalletStore } from "@/store/useWalletStore";
import { toast } from "sonner";

interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBalance: number;
}

export default function SwapModal({ isOpen, onClose, currentBalance }: SwapModalProps) {
  const [amount, setAmount] = useState("");
  const { swap, isLoading } = useWalletStore();

  const handleSwap = async () => {
    const swapAmount = parseFloat(amount);
    if (!swapAmount || swapAmount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (swapAmount > currentBalance) {
      toast.error("Insufficient balance");
      return;
    }
    try {
      await swap(swapAmount);
      toast.success(`Successfully swapped ${swapAmount} Y-COIN!`);
      setAmount("");
      onClose();
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Swap failed. Please try again.");
    }
  };

  const handleClose = () => {
    setAmount("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} placement="center">
      <ModalContent>
        <ModalHeader>
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-primary" />
            <span>Swap Y-COIN</span>
          </div>
        </ModalHeader>
        <ModalBody>
          <p className="text-sm text-default-500">
            Available Balance: <span className="font-semibold text-foreground">{currentBalance} Y-COIN</span>
          </p>
          <Input
            type="number"
            label="Amount"
            labelPlacement="outside"
            placeholder="Amount in Y-COIN"
            value={amount}
            onValueChange={setAmount}
            startContent={<Coins className="w-4 h-4 text-default-400" />}
            variant="bordered"
            min="0"
            max={currentBalance.toString()}
          />
          <p className="text-xs text-default-400">
            Processed via Vit-Rin. May take a few moments.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={handleClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            onPress={handleSwap}
            isLoading={isLoading}
            className="font-semibold"
            startContent={!isLoading && <ArrowRightLeft className="w-4 h-4" />}
          >
            {isLoading ? "Processing..." : "Confirm Swap"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
