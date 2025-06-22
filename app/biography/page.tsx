import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, Book } from "lucide-react"
import Image from "next/image"

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Dr. APJ Abdul Kalam</h1>
          <p className="text-xl text-gray-600 mb-6">A Complete Biography</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Scientist</Badge>
            <Badge variant="secondary">President</Badge>
            <Badge variant="secondary">Teacher</Badge>
            <Badge variant="secondary">Author</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Early Life */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Early Life and Education
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Avul Pakir Jainulabdeen Abdul Kalam was born on October 15, 1931, in Rameswaram, Tamil Nadu, India. He
                  came from a humble background; his father, Jainulabdeen Marakayar, was a boat owner and imam of a
                  local mosque, while his mother, Ashiamma Jainulabdeen, was a housewife.
                </p>
                <p>
                  Despite financial hardships, Kalam was an average student with a keen interest in mathematics and
                  physics. He completed his schooling at Schwartz Higher Secondary School, Ramanathapuram, and went on
                  to study physics at Saint Joseph's College, Tiruchirappalli, graduating in 1954.
                </p>
                <p>
                  In 1955, he moved to Madras to study aerospace engineering at the Madras Institute of Technology.
                  During his studies, he was particularly inspired by his teacher who told him about the importance of
                  dreams and hard work.
                </p>
              </CardContent>
            </Card>

            {/* Career */}
            <Card>
              <CardHeader>
                <CardTitle>Scientific Career</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h3>DRDO (1958-1969)</h3>
                <p>
                  Kalam started his career as a scientist at the Aeronautical Development Establishment of the Defence
                  Research and Development Organisation (DRDO). He began his career by designing a small hovercraft,
                  though initially his work did not receive much recognition.
                </p>

                <h3>ISRO (1969-1980)</h3>
                <p>
                  In 1969, Kalam was transferred to the Indian Space Research Organisation (ISRO) where he was the
                  project director of India's first Satellite Launch Vehicle (SLV-III) which successfully deployed the
                  Rohini satellite in near-earth orbit in July 1980.
                </p>

                <h3>Return to DRDO (1980-1992)</h3>
                <p>
                  Kalam returned to DRDO in 1980 and conceived the Integrated Guided Missile Development Programme
                  (IGMDP) to develop a range of missiles. He was responsible for the development and operationalisation
                  of AGNI and PRITHVI missiles, earning him the title "Missile Man of India."
                </p>
              </CardContent>
            </Card>

            {/* Presidency */}
            <Card>
              <CardHeader>
                <CardTitle>Presidency (2002-2007)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Dr. Kalam served as the 11th President of India from 2002 to 2007. He was elected with the support of
                  both the ruling Bharatiya Janata Party and the opposition Indian National Congress.
                </p>
                <p>
                  During his presidency, he was known for his accessibility and his efforts to connect with students and
                  young people. He was often called the "People's President" due to his approach of reaching out to the
                  common people.
                </p>
                <p>
                  He used his presidency to advocate for education, particularly in science and technology, and to
                  encourage young Indians to pursue careers in these fields.
                </p>
              </CardContent>
            </Card>

            {/* Later Life */}
            <Card>
              <CardHeader>
                <CardTitle>Post-Presidency and Legacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  After his presidency, Dr. Kalam returned to his passion for teaching and writing. He served as a
                  visiting professor at various universities and continued to inspire students through his lectures and
                  books.
                </p>
                <p>
                  On July 27, 2015, while delivering a lecture at the Indian Institute of Management Shillong on
                  "Creating a Livable Planet Earth," Dr. Kalam collapsed and died from an apparent cardiac arrest. He
                  was 83 years old.
                </p>
                <p>
                  His death was mourned across the nation and internationally. He was honored with a state funeral, and
                  his contributions to science and education continue to inspire millions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Personal Info */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="font-medium">Born</p>
                    <p className="text-sm text-gray-600">October 15, 1931</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="font-medium">Birthplace</p>
                    <p className="text-sm text-gray-600">Rameswaram, Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="font-medium">Died</p>
                    <p className="text-sm text-gray-600">July 27, 2015 (aged 83)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Book className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-sm text-gray-600">MIT, Saint Joseph's College</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Major Awards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Major Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Bharat Ratna (1997)</strong>
                    <p className="text-gray-600">India's highest civilian honor</p>
                  </li>
                  <li>
                    <strong>Padma Vibhushan (1990)</strong>
                    <p className="text-gray-600">Second-highest civilian award</p>
                  </li>
                  <li>
                    <strong>Padma Bhushan (1981)</strong>
                    <p className="text-gray-600">Third-highest civilian award</p>
                  </li>
                  <li>
                    <strong>Von Braun Award (2013)</strong>
                    <p className="text-gray-600">National Space Society, USA</p>
                  </li>
                  <li>
                    <strong>Hoover Medal (2009)</strong>
                    <p className="text-gray-600">ASME Foundation, USA</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Photo */}
            <Card>
              <CardContent className="p-4">
                <Image
                  src="/placeholder.svg?height=300&width=250"
                  alt="Dr. APJ Abdul Kalam"
                  width={250}
                  height={300}
                  className="w-full rounded-lg"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">Dr. Kalam during his presidency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
