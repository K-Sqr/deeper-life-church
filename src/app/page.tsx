import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Clock,
  Heart,
  BookOpen,
  MessageCircle,
  Video,
  ChevronRight,
} from "lucide-react"
import { AddToCalendar } from "@/components/add-to-calendar"
import { SERVICES, ZOOM_LINK } from "@/lib/constants"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-blue-200 text-sm font-medium tracking-wide uppercase mb-4">
            Maple Grove Headquarters Branch
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Deeper Life Bible Church
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            We&apos;re a warm community of believers growing deeper in
            God&apos;s Word. Whether you join us in person at Maple Grove or
            online, there&apos;s a place for you here.
          </p>
          <p className="text-blue-200 text-sm mb-8 flex items-center justify-center gap-1.5">
            <MapPin className="h-4 w-4" />
            Maple Grove Community Center, Maple Grove, MN
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8"
            >
              <Link href="/visit">Plan Your Visit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8"
            >
              <a href={ZOOM_LINK} target="_blank" rel="noopener noreferrer">
                <Video className="h-4 w-4 mr-2" />
                Join Online
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Service Times</h2>
          <p className="text-gray-600 text-center mb-10 max-w-lg mx-auto">
            Join us throughout the week for worship, Bible study, and prayer.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {SERVICES.map((service) => (
              <div
                key={service.day}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-700 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {service.description}
                </p>
                <p className="font-medium mt-3 text-blue-900">{service.time}</p>
                <AddToCalendar
                  title={`${service.name} – DLBC Maple Grove`}
                  startDate={service.startDate}
                  startTime={service.startTime}
                  endTime={service.endTime}
                  rruleDay={service.rruleDay}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Connected */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">
            Get Connected
          </h2>
          <p className="text-gray-600 text-center mb-10">
            There are many ways to be part of our church family.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            <ActionCard
              icon={<MapPin className="w-5 h-5" />}
              title="Plan Your Visit"
              desc="Find us, see service times, and know what to expect."
              href="/visit"
            />
            <ActionCard
              icon={<Heart className="w-5 h-5" />}
              title="Give"
              desc="Support the mission and vision of our church."
              href="/give"
            />
            <ActionCard
              icon={<MessageCircle className="w-5 h-5" />}
              title="Prayer Request"
              desc="Share your prayer needs with our church family."
              href="/contact"
            />
            <ActionCard
              icon={<BookOpen className="w-5 h-5" />}
              title="Resources"
              desc="Access Bible study materials and more."
              href="/resources"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Join Us This Week</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Whether you&apos;re exploring faith for the first time or looking
            for a church home, we&apos;d love to welcome you. Come as you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold"
            >
              <Link href="/visit">
                Get Directions
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <a href={ZOOM_LINK} target="_blank" rel="noopener noreferrer">
                <Video className="h-4 w-4 mr-2" />
                Watch Online
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

interface ActionCardProps {
  icon: React.ReactNode
  title: string
  desc: string
  href: string
}

function ActionCard({ icon, title, desc, href }: ActionCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 block"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-700 mb-4 group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-1.5">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </Link>
  )
}
