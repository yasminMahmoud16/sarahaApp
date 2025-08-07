import { Card } from "@/components/ui/card"

export default function CardWrapper({ children, className = "" }) {
    return (
        <Card className={`w-full bg-[#00000048] border-0 shadow-none ${className}`}>
            {children}
        </Card>
    );
}
