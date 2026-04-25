import {
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Calendar,
  BookOpen,
  Heart,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import {
  TEAM_MEMBERS,
  DEPARTMENTS,
  CULTURE_VALUES,
  TEAM_STATS,
  WHY_JOIN_US,
} from "../constants/ourTeamConstants";

const DEPT_ICONS = [
  <Briefcase size={28} />,
  <Award size={28} />,
  <Users size={28} />,
  <GraduationCap size={28} />,
];

const CULTURE_ICONS = [BookOpen, Users, Heart, Target];
const STAT_ICONS = [Users, Award, Calendar, Target];

export default function OurTeam() {
  const teamMembers = TEAM_MEMBERS;
  const departments = DEPARTMENTS.map((d, i) => ({
    ...d,
    icon: DEPT_ICONS[i],
  }));
  const cultureValues = CULTURE_VALUES.map((c, i) => ({
    ...c,
    icon: CULTURE_ICONS[i],
  }));
  const teamStats = TEAM_STATS.map((s, i) => ({ ...s, icon: STAT_ICONS[i] }));
  const whyJoinUs = WHY_JOIN_US;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-primary-dark)] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Users size={48} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Talented professionals committed to your success
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                8+ Team Members
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                2 Chartered Accountants
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                5+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-3">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Professionals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A diverse team of qualified chartered accountants, finance experts, and support staff
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-[var(--color-primary)] font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-xs text-gray-500 mb-3">{member.qualification}</p>

                  <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3 mb-2">
                    <span className="text-gray-500">Experience</span>
                    <span className="font-semibold text-gray-900">{member.experience}</span>
                  </div>

                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Specialization:</span> {member.specialization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Departments Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Departments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized teams dedicated to different service areas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${dept.color} text-white mb-4`}
                >
                  {dept.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {dept.name}
                </h3>
                <p className="text-gray-500 text-sm">{dept.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Culture"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Culture
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Somasekhara & Associates, we believe our people are our greatest
                asset. We foster a culture that values excellence, integrity,
                collaboration, and continuous learning.
              </p>

              <div className="space-y-4">
                {cultureValues.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg text-[var(--color-primary)]">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Join Our Team?
              </h2>
              <div className="space-y-4">
                {whyJoinUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200"
                  >
                    <CheckCircle
                      size={20}
                      className="text-green-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <GraduationCap
                    size={32}
                    className="text-[var(--color-primary)] flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">
                      Grow With Us
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We're always looking for talented, driven professionals to
                      join our growing team. If you're passionate about
                      accounting, finance, and client service, we'd love to hear
                      from you.
                    </p>
                    <button className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all">
                      View Open Positions <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We are always looking for talented, driven professionals to join our
            growing team. If you are passionate about accounting, finance, and
            client service, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[var(--color-primary)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              View Career Opportunities
            </button>
            <button className="border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
