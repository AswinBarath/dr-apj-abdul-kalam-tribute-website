"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, RefreshCw, Heart, Share2 } from "lucide-react"

const quotes = [
  {
    id: 1,
    text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    source: "Speech to Students",
    year: "2005"
  },
  {
    id: 2,
    text: "If you want to shine like a sun, first burn like a sun.",
    source: "Wings of Fire",
    year: "1999"
  },
  {
    id: 3,
    text: "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great.",
    source: "University Address",
    year: "2010"
  },
  {
    id: 4,
    text: "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.",
    source: "Presidential Speech",
    year: "2003"
  },
  {
    id: 5,
    text: "Excellence is a continuous process and not an accident.",
    source: "Ignited Minds",
    year: "2002"
  },
  {
    id: 6,
    text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    source: "Student Interaction",
    year: "2008"
  },
  {
    id: 7,
    text: "Teaching is a very noble profession that shapes the character, caliber, and future of an individual.",
    source: "Teachers' Day Speech",
    year: "2004"
  },
  {
    id: 8,
    text: "Be more dedicated to making solid achievements than in running after swift but synthetic happiness.",
    source: "My Journey",
    year: "2013"
  },
  {
    id: 9,
    text: "The best brains of the nation may be found on the last benches of the classroom.",
    source: "Address to Students",
    year: "2006"
  },
  {
    id: 10,
    text: "You have to dream before your dreams can come true.",
    source: "Wings of Fire",
    year: "1999"
  }
]

export default function QuoteOfTheDay() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])
  const [isLiked, setIsLiked] = useState(false)

  // Get quote based on current date (changes daily)
  useEffect(() => {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    const quoteIndex = dayOfYear % quotes.length
    setCurrentQuote(quotes[quoteIndex])
  }, [])

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const shareQuote = async () => {
    const text = `"${currentQuote.text}" - Dr. APJ Abdul Kalam`
    const url = window.location.href
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Quote by Dr. APJ Abdul Kalam",
          text: text,
          url: url
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareText = `${text}\n\nRead more: ${url}`
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText)
        alert('Quote copied to clipboard!')
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = shareText
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        alert('Quote copied to clipboard!')
      }
    }
  }

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
      <CardContent className="p-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Quote of the Day</h2>
          </div>
          
          <blockquote className="text-xl lg:text-2xl font-light text-gray-800 mb-6 italic leading-relaxed">
            "{currentQuote.text}"
          </blockquote>
          
          <cite className="text-lg text-gray-600 mb-6 block">
            — Dr. APJ Abdul Kalam
          </cite>
          
          <div className="text-sm text-gray-500 mb-6">
            <p>Source: {currentQuote.source} ({currentQuote.year})</p>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={getRandomQuote}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              New Quote
            </Button>
            
            <Button
              variant={isLiked ? "default" : "outline"}
              size="sm"
              onClick={toggleLike}
              className={`flex items-center gap-2 ${isLiked ? 'bg-red-500 hover:bg-red-600' : ''}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              {isLiked ? 'Liked' : 'Like'}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={shareQuote}
              className="flex items-center gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 