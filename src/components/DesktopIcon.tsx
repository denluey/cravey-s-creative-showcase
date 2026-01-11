import { LucideIcon } from "lucide-react";

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const DesktopIcon = ({ icon: Icon, label, onClick }: DesktopIconProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-3 hover:bg-secondary/50 transition-colors group w-24"
    >
      <div className="retro-border bg-primary p-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
        <Icon className="w-8 h-8" />
      </div>
      <span className="text-sm text-center font-body text-foreground group-hover:text-highlight transition-colors">
        {label}
      </span>
    </button>
  );
};

export default DesktopIcon;
