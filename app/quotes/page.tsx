"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote, Search, Heart, BookOpen, Users, Play, ExternalLink } from "lucide-react"

const quotes = [
  {
    id: 1,
    text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    category: "Dreams",
    source: "Speech to Students",
    year: "2005",
  },
  {
    id: 2,
    text: "If you want to shine like a sun, first burn like a sun.",
    category: "Success",
    source: "Wings of Fire",
    year: "1999",
  },
  {
    id: 3,
    text: "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.",
    category: "Education",
    source: "University Address",
    year: "2010",
  },
  {
    id: 4,
    text: "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.",
    category: "Inspiration",
    source: "Presidential Speech",
    year: "2003",
  },
  {
    id: 5,
    text: "Excellence is a continuous process and not an accident.",
    category: "Excellence",
    source: "Ignited Minds",
    year: "2002",
  },
  {
    id: 6,
    text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    category: "Success",
    source: "Student Interaction",
    year: "2008",
  },
  {
    id: 7,
    text: "Teaching is a very noble profession that shapes the character, caliber, and future of an individual.",
    category: "Education",
    source: "Teachers' Day Speech",
    year: "2004",
  },
  {
    id: 8,
    text: "Be more dedicated to making solid achievements than in running after swift but synthetic happiness.",
    category: "Life",
    source: "My Journey",
    year: "2013",
  },
]

const speeches = [
  {
    id: 1,
    title: "Dr APJ Abdul Kalam | 2011",
    description: "Dr APJ Abdul Kalam at IIT Gandhinagar | 2011",
    year: "2011",
    duration: "49 min",
    category: "Vision",
    videoUrl: "https://www.youtube.com/embed/weL2rinyV_U?si=a4s6DKU6RrzARprV"
  },
  {
    id: 2,
    title: "Speech - ThinkEdu Conclave",
    description: "Dr.APJ Abdul Kalam at ThinkEdu Conclave 2013, Chennai",
    year: "2013",
    duration: "56 min",
    category: "Youth",
    videoUrl: "https://www.youtube.com/embed/34LROp3DYvc?si=rx6VdBh_sgv7oTxM"
  },
  {
    id: 3,
    title: "Creativity and Youth Power",
    description: "Creativity and Youth Power | Dr. A.P.J. Abdul Kalam | IIT Madras",
    year: "2011",
    duration: "48 min",
    category: "Philosophy",
    videoUrl: "https://www.youtube.com/embed/HW6I4_VdPcA?si=4Y1wnHnVn7NcjWnK"
  },
  {
    id: 4,
    title: "Culture of Excellence Speech",
    description: "ENGLISH SPEECH | DR. A.P.J ABDUL KALAM: Culture of Excellence (English Subtitles)",
    year: "2014",
    duration: "23 min",
    category: "Education",
    videoUrl: "https://www.youtube.com/embed/LEtP7HgGTu0?si=bzueBMmHnGguNvlm"
  },
]

export default function QuotesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [favorites, setFavorites] = useState<number[]>([])

  const categories = ["All", "Dreams", "Success", "Education", "Inspiration", "Excellence", "Life"]
  const speechCategories = ["All", "Vision", "Youth", "Philosophy", "Education"]

  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || quote.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (quoteId: number) => {
    setFavorites((prev) => (prev.includes(quoteId) ? prev.filter((id) => id !== quoteId) : [...prev, quoteId]))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Quotes & Speeches</h1>
          <p className="text-xl text-gray-600 mb-6">Inspiring words and speeches by Dr. APJ Abdul Kalam</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search quotes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="speeches">Speeches</TabsTrigger>
          </TabsList>

          <TabsContent value="quotes" className="space-y-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Quotes Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredQuotes.map((quote) => (
                <Card key={quote.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary">{quote.category}</Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(quote.id)}
                        className={favorites.includes(quote.id) ? "text-red-500" : "text-gray-400"}
                      >
                        <Heart className={`h-4 w-4 ${favorites.includes(quote.id) ? "fill-current" : ""}`} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <Quote className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <blockquote className="text-lg font-medium text-gray-800 mb-3 leading-relaxed">
                          {quote.text}
                        </blockquote>
                        <div className="text-sm text-gray-600">
                          <p>
                            — {quote.source} ({quote.year})
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speeches" className="space-y-6">
            <div className="grid gap-6">
              {speeches.map((speech) => (
                <Card key={speech.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{speech.title}</CardTitle>
                        <p className="text-gray-600">{speech.description}</p>
                      </div>
                      <Badge variant="outline">{speech.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Video Embed */}
                      <div className="relative w-full h-64 rounded-lg overflow-hidden">
                        <iframe
                          src={speech.videoUrl}
                          title={speech.title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {speech.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {speech.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a href={speech.videoUrl} target="_blank" rel="noopener noreferrer">
                              <Play className="h-4 w-4 mr-1" />
                              Watch on YouTube
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
