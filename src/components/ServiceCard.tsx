interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: "cobalt" | "vermillion" | "sage";
}

const colorMap = {
  cobalt:     { bg: "bg-cobalt",     ring: "ring-blue-100"  },
  vermillion: { bg: "bg-vermillion", ring: "ring-red-100"   },
  sage:       { bg: "bg-sage",       ring: "ring-green-100" },
};

export default function ServiceCard({ title, description, icon, color = "cobalt" }: ServiceCardProps) {
  const c = colorMap[color];
  return (
    <div className={`rounded-3xl bg-white p-6 shadow-sm ring-1 ${c.ring} transition-all hover:-translate-y-1 hover:shadow-md`}>
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${c.bg} text-white`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
