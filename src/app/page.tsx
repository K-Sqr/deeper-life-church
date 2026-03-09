import Link from "next/link"
import Image from "next/image"
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
      <section className="bg-gradient-to-br from-[#132B3F] via-dlbc-navy to-dlbc-blue text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(91,163,217,0.15),_transparent_60%)]" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative">
          <Image
            src="/images/church-logo.png"
            alt=""
            width={80}
            height={80}
            className="mx-auto mb-6 drop-shadow-lg animate-scale-in"
            priority
          />
          <p className="text-dlbc-sky/80 text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
            Maple Grove Headquarters Branch
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
            Deeper Life Bible Church
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            We&apos;re a warm community of believers growing deeper in
            God&apos;s Word. Whether you join us in person at Maple Grove or
            online, there&apos;s a place for you here.
          </p>
          <p className="text-slate-400 text-sm mb-8 flex items-center justify-center gap-1.5 animate-fade-in-up delay-300">
            <MapPin className="h-4 w-4" />
            Maple Grove Community Center, Maple Grove, MN
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up delay-400">
            <Button
              asChild
              size="lg"
              className="bg-dlbc-gold hover:bg-dlbc-gold-light text-white font-semibold px-8 transition-all duration-200 hover:shadow-lg hover:shadow-dlbc-gold/20"
            >
              <Link href="/visit">Plan Your Visit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 transition-all duration-200"
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
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Service Times</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
            Join us throughout the week for worship, Bible study, and prayer.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {SERVICES.map((service) => (
              <div
                key={service.day}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-dlbc-navy/5 text-dlbc-blue mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {service.description}
                </p>
                <p className="font-medium mt-3 text-dlbc-navy">
                  {service.time}
                </p>
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">
            Get Connected
          </h2>
          <p className="text-muted-foreground text-center mb-10">
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
      <section className="py-16 md:py-20 bg-dlbc-navy text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Join Us This Week</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Whether you&apos;re exploring faith for the first time or looking
            for a church home, we&apos;d love to welcome you. Come as you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-dlbc-gold hover:bg-dlbc-gold-light text-white font-semibold transition-all duration-200"
            >
              <Link href="/visit">
                Get Directions
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/20 text-white bg-transparent hover:bg-white/10 hover:text-white transition-all duration-200"
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
      className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-border block"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-dlbc-navy/5 text-dlbc-blue mb-4 group-hover:bg-dlbc-navy/10 transition-colors duration-200">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-1.5">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </Link>
  )
}
