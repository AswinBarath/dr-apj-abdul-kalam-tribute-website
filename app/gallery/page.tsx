"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight, Download, ExternalLink } from "lucide-react"
import Image from "next/image"

interface Photo {
  id: number
  src: string
  alt: string
  title: string
  description: string
  year: string
  category: string
  source: string
  sourceUrl?: string
}

const photos: Photo[] = [
  {
    id: 1,
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg",
    alt: "Dr. APJ Abdul Kalam - Official Presidential Portrait",
    title: "The People's President",
    description: "Official portrait during his presidency (2002-2007)",
    year: "2002-2007",
    category: "Presidency",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:A._P._J._Abdul_Kalam.jpg"
  },
  {
    id: 2,
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Abdul_Kalam_at_DRDO.jpg",
    alt: "Dr. Kalam at DRDO",
    title: "Missile Man of India",
    description: "Working at Defence Research and Development Organisation",
    year: "1980s-1990s",
    category: "Science",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Abdul_Kalam_at_DRDO.jpg"
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Abdul_Kalam_with_students.jpg",
    alt: "Dr. Kalam interacting with students",
    title: "Inspiring Teacher",
    description: "Connecting with students during his presidency",
    year: "2002-2007",
    category: "Education",
    source: "Wikimedia Commons"
  },
  {
    id: 4,
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Abdul_Kalam_at_ISRO.jpg",
    alt: "Dr. Kalam at ISRO",
    title: "Space Pioneer",
    description: "Contributing to India's space program at ISRO",
    year: "1970s-1980s",
    category: "Science",
    source: "Wikimedia Commons"
  },
  {
    id: 5,
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Abdul_Kalam_swearing_in.jpg",
    alt: "Dr. Kalam taking oath as President",
    title: "Presidential Oath",
    description: "Taking oath as the 11th President of India",
    year: "2002",
    category: "Presidency",
    source: "Wikimedia Commons"
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Abdul_Kalam_with_books.jpg",
    alt: "Dr. Kalam with his books",
    title: "Author and Scholar",
    description: "With his famous books including Wings of Fire",
    year: "1990s-2015",
    category: "Literature",
    source: "Wikimedia Commons"
  }
]

const categories = ["All", "Presidency", "Science", "Education", "Literature"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredPhotos = photos.filter(
    photo => selectedCategory === "All" || photo.category === selectedCategory
  )

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return
    
    const currentPhotoIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id)
    let newIndex: number

    if (direction === "prev") {
      newIndex = currentPhotoIndex === 0 ? filteredPhotos.length - 1 : currentPhotoIndex - 1
    } else {
      newIndex = currentPhotoIndex === filteredPhotos.length - 1 ? 0 : currentPhotoIndex + 1
    }

    setSelectedPhoto(filteredPhotos[newIndex])
    setCurrentIndex(newIndex)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox()
    } else if (e.key === "ArrowLeft") {
      navigatePhoto("prev")
    } else if (e.key === "ArrowRight") {
      navigatePhoto("next")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600 mb-6">
            A visual journey through Dr. APJ Abdul Kalam's remarkable life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => openLightbox(photo, index)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-800">{photo.title}</h3>
                  <Badge variant="outline">{photo.category}</Badge>
                </div>
                <p className="text-gray-600 text-sm mb-2">{photo.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{photo.year}</span>
                  <span>Source: {photo.source}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedPhoto} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>{selectedPhoto?.title}</span>
                <Button variant="ghost" size="sm" onClick={closeLightbox}>
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>
            
            <div className="relative" onKeyDown={handleKeyDown} tabIndex={0}>
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
                onClick={() => navigatePhoto("prev")}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
                onClick={() => navigatePhoto("next")}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Main Image */}
              <div className="relative">
                <Image
                  src={selectedPhoto?.src || ""}
                  alt={selectedPhoto?.alt || ""}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              </div>

              {/* Photo Info */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{selectedPhoto?.title}</h3>
                <p className="text-gray-600 mb-3">{selectedPhoto?.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Year: {selectedPhoto?.year}</span>
                    <Badge variant="outline">{selectedPhoto?.category}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedPhoto?.sourceUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedPhoto.sourceUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Source
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a href={selectedPhoto?.src} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
