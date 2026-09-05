import type { PropsWithChildren } from "react";

function SocialIcon({
  disabled = false,
  onClick = () => { },
  href = "",
  children,
}: PropsWithChildren<{
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}>) {
  return (
    <>
      {disabled ? (
        <button
          onClick={onClick}
          className="hover:opacity-100 opacity-85 transition cursor-pointer hover:scale-[110%]"
        >
          {children}
        </button>
      ) : (
        <a
          href={href}
          className="hover:opacity-100 opacity-85 transition cursor-pointer hover:scale-[110%]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </>
  );
}

export default SocialIcon;
