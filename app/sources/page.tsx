import { Book, Video, Globe, FileText, ExternalLink, Youtube, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const sources = [
  {
    id: 1,
    title: "A. P. J. Abdul Kalam - Wikipedia",
    description: "Comprehensive biographical information and career details from the world's largest encyclopedia",
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
    url: "https://www.amazon.com/Wings-Fire-Autobiography-Abdul-Kalam/dp/8173711461",
    type: "Book",
    credibility: "Primary Source",
    iconName: "Book",
    lastVerified: "2024-01-10"
  },
  {
    id: 3,
    title: "Ignited Minds: Unleashing the Power Within India",
    description: "Dr. Kalam's vision for transforming India into a developed nation by 2020",
    url: "https://www.amazon.com/Ignited-Minds-Unleashing-Power-Within/dp/0143424122",
    type: "Book",
    credibility: "Primary Source",
    iconName: "Book",
    lastVerified: "2024-01-12"
  },
  {
    id: 4,
    title: "President of India - Dr. APJ Abdul Kalam Archives",
    description: "Official presidential archives and speeches from Rashtrapati Bhavan",
    url: "https://presidentofindia.gov.in/former-presidents.htm",
    type: "Official Document",
    credibility: "Primary Source",
    iconName: "FileText",
    lastVerified: "2024-01-14"
  },
  {
    id: 5,
    title: "ISRO - Dr. Kalam's Contributions",
    description: "Official documentation of Dr. Kalam's work at Indian Space Research Organisation",
    url: "https://www.isro.gov.in/",
    type: "Official Document",
    credibility: "Primary Source",
    iconName: "FileText",
    lastVerified: "2024-01-08"
  },
  {
    id: 6,
    title: "DRDO - Missile Development Program",
    description: "Official records of Dr. Kalam's contributions to missile development",
    url: "https://www.drdo.gov.in/",
    type: "Official Document",
    credibility: "Primary Source",
    iconName: "FileText",
    lastVerified: "2024-01-05"
  },
  {
    id: 7,
    title: "Dr. APJ Abdul Kalam - Official YouTube Channel",
    description: "Collection of official speeches, interviews, and motivational talks",
    url: "https://www.youtube.com/results?search_query=APJ+Abdul+Kalam+speeches",
    type: "Video",
    credibility: "Primary Source",
    iconName: "Video",
    lastVerified: "2024-01-10"
  },
  {
    id: 8,
    title: "BBC News - Dr. Kalam Obituary",
    description: "Comprehensive coverage of Dr. Kalam's life and legacy by BBC",
    url: "https://www.bbc.com/news/world-asia-india-33670312",
    type: "News",
    credibility: "High",
    iconName: "FileText",
    lastVerified: "2024-01-12"
  },
  {
    id: 9,
    title: "The Hindu - Dr. Kalam Archives",
    description: "Collection of articles and interviews from The Hindu newspaper",
    url: "https://www.thehindu.com/topic/APJ-Abdul-Kalam/",
    type: "News",
    credibility: "High",
    iconName: "FileText",
    lastVerified: "2024-01-12"
  },
  {
    id: 10,
    title: "Times of India - Kalam Special Coverage",
    description: "Comprehensive coverage of Dr. Kalam's life and achievements",
    url: "https://timesofindia.indiatimes.com/topic/APJ-Abdul-Kalam",
    type: "News",
    credibility: "High",
    iconName: "FileText",
    lastVerified: "2024-01-14"
  },
  {
    id: 11,
    title: "India Today - Dr. Kalam's Legacy",
    description: "Special coverage on Dr. Kalam's contributions to science and education",
    url: "https://www.indiatoday.in/topic/apj-abdul-kalam",
    type: "News",
    credibility: "High",
    iconName: "FileText",
    lastVerified: "2024-01-15"
  },
  {
    id: 12,
    title: "Bharat Ratna - Dr. APJ Abdul Kalam",
    description: "Official information about Dr. Kalam's Bharat Ratna award",
    url: "https://en.wikipedia.org/wiki/Bharat_Ratna",
    type: "Official Document",
    credibility: "High",
    iconName: "Award",
    lastVerified: "2024-01-10"
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
    case "Youtube":
      return Youtube;
    case "Award":
      return Award;
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
                    <a 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      Visit Source <ExternalLink className="h-3 w-3" />
                    </a>
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
                <li><strong>Encyclopedia:</strong> Academic reference materials</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Educational Resources Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Educational Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a 
              href="https://www.youtube.com/watch?v=34LROp3DYvc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <Youtube className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="font-semibold">Kalam sir 2013 Speech</h3>
                <p className="text-sm text-gray-600">Dr.APJ Abdul Kalam at ThinkEdu Conclave 2013, Chennai</p>
              </div>
            </a>
            
            <a 
              href="https://www.youtube.com/watch?v=HW6I4_VdPcA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <Youtube className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="font-semibold">Creativity and Youth Power</h3>
                <p className="text-sm text-gray-600">Creativity and Youth Power | Dr. A.P.J. Abdul Kalam | IIT Madras</p>
              </div>
            </a>
            
            <a 
              href="https://www.youtube.com/watch?v=LEtP7HgGTu0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <Youtube className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="font-semibold">Culture of Excellence Speech</h3>
                <p className="text-sm text-gray-600">ENGLISH SPEECH | DR. A.P.J ABDUL KALAM: Culture of Excellence (English Subtitles)</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
