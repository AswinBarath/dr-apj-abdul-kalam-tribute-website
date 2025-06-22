import { Book, Video, Globe, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const sources = [
  {
    id: 1,
    title: "A. P. J. Abdul Kalam - Wikipedia",
    description: "Comprehensive biographical information and career details",
    url: "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam",
    type: "Encyclopedia",
    credibility: "High",
    iconName: "Globe",
    lastVerified: "2024-01-15"
  },
  {
    id: 2,
    title: "Wings of Fire: An Autobiography",
    description: "Dr. Kalam's autobiography detailing his journey from humble beginnings to becoming a renowned scientist",
    url: "#",
    type: "Book",
    credibility: "Primary Source",
    iconName: "Book",
    lastVerified: "2024-01-10"
  },
  {
    id: 3,
    title: "The Hindu - Dr. Kalam Archives",
    description: "Collection of articles and interviews from The Hindu newspaper",
    url: "https://www.thehindu.com",
    type: "News",
    credibility: "High",
    iconName: "FileText",
    lastVerified: "2024-01-12"
  },
  {
    id: 4,
    title: "Times of India - Kalam Special Coverage",
    description: "Comprehensive coverage of Dr. Kalam's life and achievements",
    url: "https://timesofindia.indiatimes.com",
    type: "News",
    credibility: "High",
    iconName: "FileText",
    lastVerified: "2024-01-14"
  },
  {
    id: 5,
    title: "Presidential Speeches Collection",
    description: "Official speeches and addresses during his presidency (2002-2007)",
    url: "#",
    type: "Video",
    credibility: "Primary Source",
    iconName: "Video",
    lastVerified: "2024-01-08"
  },
  {
    id: 6,
    title: "DRDO Official Documentation",
    description: "Official records of Dr. Kalam's contributions to missile development",
    url: "#",
    type: "Official Document",
    credibility: "Primary Source",
    iconName: "FileText",
    lastVerified: "2024-01-05"
  }
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Globe":
      return Globe;
    case "Book":
      return Book;
    case "Video":
      return Video;
    case "FileText":
      return FileText;
    default:
      return FileText;
  }
};

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Sources & References</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive collection of reliable sources and references about Dr. APJ Abdul Kalam's life, 
            achievements, and contributions to science and society.
          </p>
        </div>

        {/* Sources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sources.map((source) => {
            const IconComponent = getIconComponent(source.iconName);
            return (
              <Card key={source.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                    <div>
                      <Badge variant="secondary" className="mb-2">{source.type}</Badge>
                      <Badge variant={source.credibility === "Primary Source" ? "default" : "outline"}>
                        {source.credibility}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{source.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {source.description}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Verified: {source.lastVerified}</span>
                    {source.url !== "#" && (
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Visit Source →
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About These Sources</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Credibility Levels</h3>
              <ul className="space-y-2">
                <li><strong>Primary Source:</strong> Direct accounts, autobiographies, official documents</li>
                <li><strong>High:</strong> Reputable news sources, academic references</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Source Types</h3>
              <ul className="space-y-2">
                <li><strong>Official Documents:</strong> Government and institutional records</li>
                <li><strong>News:</strong> Reputable media coverage</li>
                <li><strong>Book:</strong> Published works and autobiographies</li>
                <li><strong>Video:</strong> Recorded speeches and interviews</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
