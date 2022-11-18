import { Menu } from "@headlessui/react";
import { ReactNode } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  href: string;
  children: ReactNode;
};

export default function DropdownMenuItem({ href, children }: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={`#${href}`}
          className={classNames(
            active ? "bg-zinc-700" : "",
            "block px-4 py-2 text-sm"
          )}
          onClick={() => {
            const ref = document.getElementById(href);
            if (ref) {
              window.scrollTo({ behavior: "smooth", top: ref.offsetTop });
            }
          }}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
}
