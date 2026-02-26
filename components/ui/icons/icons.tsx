import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

export type ChevronIconVariant = "large" | "small";

export interface ChevronIconProps extends IconProps {
  variant?: ChevronIconVariant;
}

export const HomeLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M22 22H2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m2 11 8.126-6.5a3 3 0 0 1 3.748 0L22 11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M4 22V9.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M20 22V9.5"
    />
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5"
    />
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);

export const HomeBoldIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path d="M18.5 3H16a.5.5 0 0 0-.5.5v.059l3.5 2.8V3.5a.5.5 0 0 0-.5-.5Z" />
    <path
      fillRule="evenodd"
      d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="m20.75 10.96.782.626a.75.75 0 0 0 .936-1.172l-8.125-6.5a3.75 3.75 0 0 0-4.686 0l-8.125 6.5a.75.75 0 0 0 .937 1.172l.781-.626v10.29H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25V10.96ZM9.25 9.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Zm2.8 3.75c.664 0 1.237 0 1.696.062.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-1.5V17c0-.728-.002-1.2-.048-1.546-.044-.325-.114-.427-.172-.484-.057-.057-.159-.128-.484-.172-.347-.046-.818-.048-1.546-.048-.728 0-1.2.002-1.546.048-.325.044-.427.115-.484.172-.057.057-.128.159-.172.484-.046.347-.048.818-.048 1.546v4.25h-1.5v-4.3c0-.664 0-1.237.062-1.696.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h.098Z"
      clipRule="evenodd"
    />
  </svg>
);

export const WalletLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6 10h4"
    />
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M20.833 11h-2.602C16.446 11 15 12.343 15 14s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148-.036-.501-.465-.9-1.005-.933-.035-.002-.076-.002-.16-.002Z"
    />
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M20.965 11c-.078-1.872-.328-3.02-1.137-3.828C18.657 6 16.771 6 13 6h-3C6.229 6 4.343 6 3.172 7.172 2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m6 6 3.735-2.477a3.237 3.237 0 0 1 3.53 0L17 6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.991 14h.01"
    />
  </svg>
);

export const WalletBoldIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M20.41 9.86a2.822 2.822 0 0 0-.175-.003H17.8c-1.992 0-3.698 1.581-3.698 3.643s1.706 3.643 3.699 3.643h2.433c.061 0 .12 0 .175-.004a1.698 1.698 0 0 0 1.586-1.581c.004-.059.004-.122.004-.18v-3.756c0-.058 0-.121-.004-.18a1.698 1.698 0 0 0-1.585-1.581Zm-2.823 4.611c.513 0 .93-.434.93-.971 0-.537-.417-.971-.93-.971-.513 0-.929.434-.929.971 0 .537.416.971.93.971Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M20.234 18.6a.214.214 0 0 1 .214.27c-.194.692-.501 1.282-.994 1.778-.721.727-1.636 1.05-2.766 1.203-1.098.149-2.5.149-4.272.149h-2.037c-1.771 0-3.174 0-4.272-.149-1.13-.153-2.045-.476-2.766-1.203C2.62 19.922 2.3 19 2.148 17.861 2 16.754 2 15.34 2 13.555v-.11c0-1.785 0-3.2.148-4.306C2.3 8 2.62 7.08 3.34 6.351c.721-.726 1.636-1.05 2.766-1.202C7.205 5 8.608 5 10.379 5h2.037c1.771 0 3.174 0 4.272.149 1.13.153 2.045.476 2.766 1.202.493.497.8 1.087.994 1.78a.214.214 0 0 1-.214.269h-2.433c-2.734 0-5.143 2.177-5.143 5.1 0 2.923 2.41 5.1 5.144 5.1h2.432ZM5.614 8.886a.725.725 0 0 0-.722.728c0 .403.323.729.722.729H9.47c.4 0 .723-.326.723-.729a.726.726 0 0 0-.723-.728H5.614Z"
      clipRule="evenodd"
    />
    <path d="m7.777 4.024 1.958-1.443a2.969 2.969 0 0 1 3.53 0l1.969 1.451C14.41 4 13.49 4 12.483 4h-2.17c-.922 0-1.769 0-2.536.024Z" />
  </svg>
);

export const GamesLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M8 12v4m-2-2h4"
    />
    <path fill="currentColor" d="M16 12.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    <path fill="currentColor" d="M18 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 6V5a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V2"
    />
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M2 14c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 9.8 22 11.2 22 14c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 18.2 2 16.8 2 14Z"
    />
  </svg>
);

export const GamesBoldIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M15 1.25a.75.75 0 0 1 .75.75v1A1.75 1.75 0 0 1 14 4.75h-1a.25.25 0 0 0-.25.25v1H14c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h1.25V5c0-.966.784-1.75 1.75-1.75h1a.25.25 0 0 0 .25-.25V2a.75.75 0 0 1 .75-.75ZM8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05c.11 0 .2.09.2.2V16a.75.75 0 0 0 1.5 0v-1.05c0-.11.09-.2.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2V12ZM15 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export const ChevronLeftIcon: React.FC<ChevronIconProps> = ({
  size = 24,
  className,
  variant = "large",
  ...props
}) => {
  if (variant === "small") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        {...props}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m13 15-3-3 3-3"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M15 19.92 8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
      />
    </svg>
  );
};

export const ChevronRightIcon: React.FC<ChevronIconProps> = ({
  size = 24,
  className,
  variant = "large",
  ...props
}) => {
  if (variant === "small") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        {...props}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m11 9 3 3-3 3"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
      />
    </svg>
  );
};

export const ChevronDownIcon: React.FC<ChevronIconProps> = ({
  size = 24,
  className,
  variant = "large",
  ...props
}) => {
  if (variant === "small") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        {...props}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m15 11-3 3-3-3"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
      />
    </svg>
  );
};

export const ChevronUpIcon: React.FC<ChevronIconProps> = ({
  size = 24,
  className,
  variant = "large",
  ...props
}) => {
  if (variant === "small") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        {...props}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m9 13 3-3 3 3"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M19.92 15.05 13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
      />
    </svg>
  );
};

export const YCoinIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m12 12.55 3.85-4.4m-7.7 0 1.65 1.886"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 12.55v4.4"
    />
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export const DangerCircleLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75Z"
    />
    <path
      fill="currentColor"
      d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export const DangerLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75Z"
    />
    <path
      fill="currentColor"
      d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.294 4.476C9.366 3.115 10.502 2.25 12 2.25c1.498 0 2.634.865 3.706 2.226 1.054 1.34 2.17 3.32 3.6 5.855l.436.772c1.181 2.095 2.115 3.75 2.605 5.077.5 1.358.62 2.59-.138 3.677-.735 1.055-1.962 1.486-3.51 1.69-1.541.203-3.615.203-6.274.203h-.85c-2.66 0-4.733 0-6.274-.203-1.548-.204-2.775-.635-3.51-1.69-.758-1.087-.639-2.32-.138-3.677.49-1.328 1.424-2.982 2.605-5.077l.436-.772c1.429-2.535 2.546-4.516 3.6-5.855Zm1.179.928C8.499 6.641 7.437 8.52 5.965 11.13l-.364.645c-1.226 2.174-2.097 3.724-2.54 4.925-.438 1.186-.378 1.814-.04 2.3.361.516 1.038.87 2.476 1.06 1.432.188 3.406.19 6.14.19h.727c2.733 0 4.707-.002 6.14-.19 1.437-.19 2.114-.544 2.474-1.06.339-.486.4-1.114-.038-2.3-.444-1.201-1.315-2.751-2.541-4.925l-.364-.645c-1.472-2.61-2.534-4.489-3.508-5.726C13.562 4.18 12.813 3.75 12 3.75c-.813 0-1.562.429-2.527 1.654Z"
      clipRule="evenodd"
    />
  </svg>
);

export const InfoLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75Z"
    />
    <path
      fill="currentColor"
      d="M12 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export const QuestionLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25Zm0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-8.75a2.625 2.625 0 0 1 1.335 4.886c-.197.116-.36.243-.465.368-.102.12-.12.2-.12.246V13a.75.75 0 0 1-1.5 0v-1.25c0-.506.222-.916.477-1.217.252-.297.566-.524.844-.688a1.125 1.125 0 1 0-1.696-.97.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 12 6.25Z"
    />
  </svg>
);

export const LoginLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m11.68 14.62 2.56-2.56-2.56-2.56"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M4 12.06h10.17"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"
    />
  </svg>
);

export const LogoutLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M17.44 14.62 20 12.06 17.44 9.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M9.76 12.06h10.17"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M11.76 20c-4.42 0-8-3-8-8s3.58-8 8-8"
    />
  </svg>
);

export const MoonLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.017 2.802a9.25 9.25 0 1 0 10.181 10.181A7.25 7.25 0 1 1 11.017 2.802ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25c.717 0 1.075.571 1.137 1.026.059.438-.103.995-.606 1.299a5.75 5.75 0 1 0 7.894 7.894c.304-.503.861-.665 1.299-.606.455.062 1.026.42 1.026 1.137 0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12Z"
      clipRule="evenodd"
    />
  </svg>
);

export const SunLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <circle
      cx="12"
      cy="12"
      r="6"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 2v1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M12 21v1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M22 12h-1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M3 12H2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m19.07 4.93-.392.392"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m5.322 18.678-.393.393"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m19.07 19.07-.392-.392"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="m5.322 5.322-.393-.393"
    />
  </svg>
);

export const SettingsLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth="1.5"
      d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353 1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555.473.297.777.803.777 1.361 0 .558-.304 1.064-.777 1.36-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008 1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const SettingsBoldIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.409 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353 1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453-.47.807-.704 1.21-.757 1.605-.07.526.074 1.058.4 1.479.148.192.357.353.68.555.477.297.783.803.783 1.361 0 .558-.306 1.064-.782 1.36-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605.47.807.704 1.21 1.022 1.453.424.323.96.465 1.49.396.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353.015.38.051.64.145.863.204.49.596.88 1.09 1.083.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308.53.07 1.066-.073 1.49-.396.318-.242.553-.646 1.022-1.453.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555-.477-.297-.783-.803-.783-1.361 0-.558.306-1.064.782-1.36.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008 1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083ZM12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9c-1.67 0-3.023 1.343-3.023 3s1.354 3 3.023 3Z"
      clipRule="evenodd"
    />
  </svg>
);

export const ReceivedLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m5 17.5 14-14"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M5 7.23V17.5h10.27"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M3.5 22h17"
    />
  </svg>
);

export const RefreshLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M22 12c0 5.52-4.48 10-10 10s-8.89-5.56-8.89-5.56m0 0h4.52m-4.52 0v5M2 12C2 6.48 6.44 2 12 2c6.67 0 10 5.56 10 5.56m0 0v-5m0 5h-4.44"
    />
  </svg>
);

export const DownloadLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m9.32 11.68 2.56 2.56 2.56-2.56"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M11.88 4v10.17"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M20 12.18c0 4.42-3 8-8 8s-8-3.58-8-8"
    />
  </svg>
);

export const SwapLinearIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m20.5 14.99-5.01 5.02"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M3.5 14.99h17"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="m3.5 9.01 5.01-5.02"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M20.5 9.01h-17"
    />
  </svg>
);

