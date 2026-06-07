"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useAuthStore } from "@/store/useAuthStore";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import { toast } from "sonner";

export default function SettingsPage() {
  const { user, logout } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [username, setUsername] = useState(user?.username || "");
  const [selectedTheme, setSelectedTheme] = useState(theme || "dark");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user.username || "");
      setSelectedTheme(user.theme || theme || "dark");
    }
  }, [user, theme]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.put("/auth/update", { username, theme: selectedTheme });
      useAuthStore.setState({ user: response.data.user });
      if (selectedTheme !== theme) setTheme(selectedTheme);
      toast.success("Settings updated successfully!");
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Couldn't update settings. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Card shadow="sm">
        <CardBody className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Username"
              placeholder="Enter your username"
              value={username}
              onValueChange={setUsername}
              variant="bordered"
            />

            <Select
              label="Theme"
              selectedKeys={[selectedTheme]}
              onSelectionChange={(keys) => {
                const selected = Array.from(keys)[0] as string;
                setSelectedTheme(selected);
              }}
              variant="bordered"
            >
              <SelectItem key="dark" value="dark">Dark</SelectItem>
              <SelectItem key="light" value="light">Light</SelectItem>
            </Select>

            <Button type="submit" color="primary" size="lg" isLoading={isLoading} className="font-semibold">
              Save Changes
            </Button>
          </form>
        </CardBody>
      </Card>

      <Card shadow="sm">
        <CardBody className="p-6">
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <Button color="danger" variant="flat" onPress={handleLogout} className="font-semibold">
            Logout
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
