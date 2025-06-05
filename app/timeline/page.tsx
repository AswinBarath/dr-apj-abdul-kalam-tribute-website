import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Rocket, BookOpen, Users } from "lucide-react"

const timelineEvents = [
  {
    year: "1931",
    title: "Born in Rameswaram",
    description: "Born on October 15 in Rameswaram, Tamil Nadu, into a humble family.",
    category: "Personal",
    icon: Calendar,
  },
  {
    year: "1954",
    title: "Physics Graduation",
    description: "Graduated with a degree in Physics from Saint Joseph's College, Tiruchirappalli.",
    category: "Education",
    icon: BookOpen,
  },
  {
    year: "1955",
    title: "Aerospace Engineering",
    description: "Completed Aerospace Engineering from Madras Institute of Technology.",
    category: "Education",
    icon: Rocket,
  },
  {
    year: "1958",
    title: "Joined DRDO",
    description: "Started his career as a scientist at DRDO's Aeronautical Development Establishment.",
    category: "Career",
    icon: Rocket,
  },
  {
    year: "1969",
    title: "Transferred to ISRO",
    description: "Joined Indian Space Research Organisation as project director of SLV-III.",
    category: "Career",
    icon: Rocket,
  },
  {
    year: "1980",
    title: "SLV-III Success",
    description: "Successfully launched India's first satellite launch vehicle, deploying Rohini satellite.",
    category: "Achievement",
    icon: Award,
  },
  {
    year: "1980",
    title: "Returned to DRDO",
    description: "Returned to DRDO and conceived the Integrated Guided Missile Development Programme.",
    category: "Career",
    icon: Rocket,
  },
  {
    year: "1981",
    title: "Padma Bhushan",
    description: "Awarded Padma Bhushan for his contributions to defense research.",
    category: "Award",
    icon: Award,
  },
  {
    year: "1988",
    title: "Prithvi Missile Test",
    description: "Successfully test-fired the Prithvi missile, marking a milestone in Indian defense.",
    category: "Achievement",
    icon: Rocket,
  },
  {
    year: "1989",
    title: "Agni Missile Test",
    description: "Successfully test-fired the Agni missile, establishing India's missile capabilities.",
    category: "Achievement",
    icon: Rocket,
  },
  {
    year: "1990",
    title: "Padma Vibhushan",
    description: "Awarded Padma Vibhushan for his exceptional contributions to science and technology.",
    category: "Award",
    icon: Award,
  },
  {
    year: "1992",
    title: "Defense Research Advisor",
    description: "Appointed as Scientific Advisor to Defense Minister and Secretary, DRDO.",
    category: "Career",
    icon: Users,
  },
  {
    year: "1997",
    title: "Bharat Ratna",
    description: "Awarded India's highest civilian honor, the Bharat Ratna.",
    category: "Award",
    icon: Award,
  },
  {
    year: "1998",
    title: "Pokhran-II Tests",
    description: "Played a crucial role in India's nuclear tests at Pokhran, establishing India as a nuclear power.",
    category: "Achievement",
    icon: Rocket,
  },
  {
    year: "1999",
    title: "Wings of Fire Published",
    description: "Published his autobiography 'Wings of Fire', inspiring millions of readers.",
    category: "Literature",
    icon: BookOpen,
  },
  {
    year: "2002",
    title: "Became President",
    description: "Elected as the 11th President of India, becoming the 'People's President'.",
    category: "Political",
    icon: Users,
  },
  {
    year: "2007",
    title: "End of Presidency",
    description: "Completed his presidential term and returned to teaching and writing.",
    category: "Political",
    icon: Users,
  },
  {
    year: "2010",
    title: "What Can I Give Movement",
    description: "Launched the 'What Can I Give Movement' to inspire youth participation in national development.",
    category: "Social",
    icon: Users,
  },
  {
    year: "2015",
    title: "Passed Away",
    description: "Died on July 27 while delivering a lecture at IIM Shillong, leaving behind an inspiring legacy.",
    category: "Personal",
    icon: Calendar,
  },
]

const categoryColors = {
  Personal: "bg-blue-100 text-blue-800",
  Education: "bg-green-100 text-green-800",
  Career: "bg-purple-100 text-purple-800",
  Achievement: "bg-yellow-100 text-yellow-800",
  Award: "bg-red-100 text-red-800",
  Literature: "bg-indigo-100 text-indigo-800",
  Political: "bg-orange-100 text-orange-800",
  Social: "bg-teal-100 text-teal-800",
}

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Timeline of Achievements</h1>
          <p className="text-xl text-gray-600 mb-6">Key milestones in Dr. APJ Abdul Kalam's extraordinary life</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300 hidden md:block"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon
              return (
                <div key={index} className="relative flex items-start md:items-center gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Mobile year badge */}
                  <div className="md:hidden">
                    <Badge variant="outline" className="text-lg font-bold px-3 py-1">
                      {event.year}
                    </Badge>
                  </div>

                  {/* Content card */}
                  <Card
                    className={`flex-1 hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? "md:ml-16" : "md:ml-16"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <IconComponent className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                            <Badge
                              className={`text-xs mt-1 ${categoryColors[event.category as keyof typeof categoryColors]}`}
                            >
                              {event.category}
                            </Badge>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-lg font-bold px-3 py-1 hidden md:block">
                          {event.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">84</div>
              <div className="text-gray-600">Years of Life</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600">Years as President</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Years in Science</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Books Authored</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
