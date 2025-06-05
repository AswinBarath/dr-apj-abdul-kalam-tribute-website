import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Lightbulb, Rocket, Users, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Dr. APJ Abdul Kalam</h1>
              <p className="text-xl lg:text-2xl mb-4 opacity-90">The People's President</p>
              <p className="text-lg mb-8 opacity-80 leading-relaxed">
                Scientist, Teacher, President, and Inspiration to Millions
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/biography">
                  <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                    Explore His Life
                  </Button>
                </Link>
                <Link href="/quotes">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-800"
                  >
                    Read Quotes
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=320"
                  alt="Dr. APJ Abdul Kalam"
                  width={320}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-800 p-3 rounded-full">
                  <Rocket className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">A Legacy of Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. Kalam's life exemplified dedication to science, education, and service to humanity. His contributions
              continue to inspire generations across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Rocket className="h-8 w-8 text-blue-600" />
                  <CardTitle>Missile Man of India</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Led India's missile development program, including Agni and Prithvi missiles, establishing India as a
                  formidable defense technology nation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-red-600" />
                  <CardTitle>People's President</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Served as India's 11th President (2002-2007), connecting with citizens, especially students, earning
                  the title "People's President."
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-green-600" />
                  <CardTitle>Inspiring Teacher</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Dedicated educator who believed in nurturing young minds, authored numerous books, and delivered
                  thousands of inspiring speeches.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-yellow-600" />
                  <CardTitle>Visionary Scientist</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Pioneered space technology at ISRO, contributing to satellite launch vehicles and making space
                  technology accessible for national development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-600" />
                  <CardTitle>Youth Icon</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connected with millions of students worldwide, encouraging them to dream big and work towards making
                  India a developed nation by 2020.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Quote className="h-8 w-8 text-indigo-600" />
                  <CardTitle>Motivational Speaker</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Delivered inspiring speeches that continue to motivate people to pursue excellence, innovation, and
                  service to society.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-light text-gray-800 mb-6 italic">
              "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."
            </blockquote>
            <cite className="text-lg text-gray-600">— Dr. APJ Abdul Kalam</cite>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Explore More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/biography" className="group">
              <Card className="hover:shadow-lg transition-all group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Biography</h3>
                  <p className="text-gray-600">Complete life story and achievements</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/timeline" className="group">
              <Card className="hover:shadow-lg transition-all group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 text-green-600 mx-auto mb-4 flex items-center justify-center">
                    <div className="h-8 w-1 bg-green-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                  <p className="text-gray-600">Key milestones and achievements</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/quotes" className="group">
              <Card className="hover:shadow-lg transition-all group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Quote className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Quotes & Speeches</h3>
                  <p className="text-gray-600">Inspiring words and speeches</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/notes" className="group">
              <Card className="hover:shadow-lg transition-all group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 text-orange-600 mx-auto mb-4 flex items-center justify-center">
                    <div className="h-8 w-8 border-2 border-orange-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">My Notes</h3>
                  <p className="text-gray-600">Save your favorite quotes and thoughts</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
