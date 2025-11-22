import { TeamCard } from "./TeamCard";

const TEAM_MEMBERS = [
  {
    name: "Alexy Joven",
    role: "Growth Marketing Partner",
    imageSrc: "https://framerusercontent.com/images/vBPpZ6ycHPuURXOoFDxj5qrCIc.png?width=480&height=480",
    twitterUrl: "https://x.com/SenorAlex__",
    linkedinUrl: "https://www.linkedin.com/in/alexy-joven-405075107/",
  },
  {
    name: "Dylan Gül",
    role: "Creative Director",
    imageSrc: "https://framerusercontent.com/images/vBPpZ6ycHPuURXOoFDxj5qrCIc.png?width=480&height=480",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Polina Kalashnikova",
    role: "Tech Lead",
    imageSrc: "https://framerusercontent.com/images/vBPpZ6ycHPuURXOoFDxj5qrCIc.png?width=480&height=480",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export function TeamSection() {
  return (
    <section className="w-full bg-background py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          {/* Section Header - Left aligned to match reference style somewhat */}
          <div className="w-full md:w-1/4 lg:w-1/5 shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase sticky top-24">
              Team
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
