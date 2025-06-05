import { Book, Video, Globe, FileText } from "lucide-react"

const sources = [
  {
    id: 1,
    title: "A. P. J. Abdul Kalam - Wikipedia",
    description: "Comprehensive biographical information and career details",
    url: "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam",
    type: "Encyclopedia",
    credibility: "High",
    icon: Globe,
    lastVerified: "2024-01-15"
  },
  {
    id: 2,
    title: "Wings of Fire: An Autobiography",
    description: "Dr. Kalam's autobiography detailing his journey from humble beginnings to becoming a renowned scientist",
    url: "#",
    type: "Book",
    credibility: "Primary Source",
    icon: Book,
    lastVerified: "2024-01-10"
  },
  {
    id: 3,
    title: "The Hindu - Dr. Kalam Archives",
    description: "Collection of articles and interviews from The Hindu newspaper",
    url: "https://www.thehindu.com",
    type: "News",
    credibility: "High",
    icon: FileText,
    lastVerified: "2024-01-12"
  },
  {
    id: 4,
    title: "Times of India - Kalam Special Coverage",
    description: "Comprehensive coverage of Dr. Kalam's life and achievements",
    url: "https://timesofindia.indiatimes.com",
    type: "News",
    credibility: "High",
    icon: FileText,
    lastVerified: "2024-01-14"
  },
  {
    id: 5,
    title: "Presidential Speeches Collection",
    description: "Official speeches and addresses during his presidency (2002-2007)",
    url: "#",
    type: "Video",
    credibility: "Primary Source",
    icon: Video,
    lastVerified: "2024-01-08"
  },
  {
    id: 6,
    title: "DRDO Official Documentation",
    description: "Official records of Dr. Kalam's contributions to missile development",
    url: "#",
    type: "Official Document",
    credibility: "Primary Source",
    icon: FileText,
    lastVerified: "2024-01-05"
  },
  {
