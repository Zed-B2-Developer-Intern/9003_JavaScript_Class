"use client"
import { FormEvent, useState } from 'react'
import Head from 'next/head'
import { Button, Container, Typography, Card, CardContent, Avatar, TextField } from '@mui/material'
import Link from 'next/link'

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', feedback: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>TechNova - Transforming Ideas Into Innovation</title>
      </Head>

      <main className="bg-white text-gray-800">
        <section className="bg-gray-100 py-20 px-4">
          <Container maxWidth="lg" className="text-center">
            <Typography variant="h2" className="font-bold mb-6">
              Welcome to TechNova 🚀
            </Typography>
            <Typography variant="h6" className="mb-8">
              Empowering businesses with next-generation Java and cloud solutions.
            </Typography>
            <Link href="/about" passHref>
              <Button variant="contained" color="primary" size="large">
                About Us
              </Button>
            </Link>
          </Container>
        </section>


        <section className="py-20 px-4 bg-gray-50">
          <Container maxWidth="lg" className='flex flex-col items-center space-y-5!'>
            <Typography variant="h4" className="text-center font-semibold mb-12">
              Our Expertise
            </Typography>
            <Typography variant="body1" className="text-center max-w-3xl mx-auto">
              From enterprise Java applications and RESTful APIs to cloud-native deployments, our team specializes in creating secure, maintainable systems that are ready to scale. We work across industries to deliver custom solutions with precision and agility.
            </Typography>
          </Container>
        </section>

        <section className="py-20 px-4 bg-white">
          <Container maxWidth="lg">
            <Typography variant="h4" className="text-center font-semibold mb-12">
              Case Studies
            </Typography>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {[
                {
                  title: 'Retail Analytics Platform',
                  desc: 'Built a Java-based dashboard and microservice architecture to process 1M+ transactions per day for a retail chain.',
                },
                {
                  title: 'HealthTech Integration',
                  desc: 'Integrated patient data systems using cloud-native APIs and improved data access speed by 45%.',
                },
              ].map((caseStudy, idx) => (
                <Card key={idx} className="p-6">
                  <CardContent>
                    <Typography variant="h6" className="mb-2">{caseStudy.title}</Typography>
                    <Typography variant="body2">{caseStudy.desc}</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>



        <section className="py-20 px-4 bg-white">
          <Container maxWidth="lg">
            <Typography variant="h4" className="text-center font-semibold mb-12">
              Why Choose TechNova?
            </Typography>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
              {[
                { title: 'AI-Driven Solutions', desc: 'Enhance productivity with intelligent automation and predictive analytics.' },
                { title: 'Scalable Cloud Architecture', desc: 'Robust, cloud-native platforms tailored for growth and reliability.' },
                { title: 'Dedicated Support', desc: 'Round-the-clock assistance ensuring seamless project delivery and maintenance.' },
              ].map((feature, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-shadow">
                  <CardContent>
                    <Typography variant="h6" className="font-semibold mb-2">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2">{feature.desc}</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <Container maxWidth="sm">
            <Typography variant="h5" className="text-center font-semibold mb-8">
              Share Your Experience
            </Typography>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4! flex flex-col items-center">
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <TextField
                  fullWidth
                  label="Your Feedback"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  required
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit Feedback
                </Button>
              </form>
            ) : (
              <div className="text-center text-green-600 font-medium text-lg">Thank you! Feedback submitted.</div>
            )}
          </Container>
        </section>



        <section className="py-20 px-4 bg-white">
          <Container maxWidth="lg">
            <Typography variant="h4" className="text-center font-semibold mb-12">
              Feedbacks
            </Typography>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {[
                {
                  name: 'Deepak Sharma',
                  feedback: 'We migrated our entire infrastructure to a cloud-native stack with TechNova. The transition was smooth and well-managed.',
                },
                {
                  name: 'Meera Kulkarni',
                  feedback: 'The support team at TechNova was always a step ahead. They ensured every milestone was met on time and with quality.',
                },
                {
                  name: 'Sahil Khanna',
                  feedback: 'TechNova gave us the tools and architecture to scale quickly. Their microservices expertise is unmatched.',
                },
                {
                  name: 'Priya Menon',
                  feedback: 'Loved how transparent and technically sound the team was. They felt more like partners than vendors.',
                },
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-4">
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <Avatar className="mr-4" />
                      <Typography variant="h6">{testimonial.name}</Typography>
                    </div>
                    <Typography variant="body2">{testimonial.feedback}</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 px-4 bg-gray-100">
          <Container maxWidth="md" className="text-center">
            <Typography variant="h4" className="font-semibold mb-6">
              Careers at TechNova
            </Typography>
            <Typography variant="body1" className="mb-4">
              We're always looking for curious minds and strong developers. If you're passionate about building modern Java systems and cloud apps, we’d love to talk.
            </Typography>
            <Button variant="outlined" color="primary" onClick={()=>{}}>
              View Open Roles
            </Button>
          </Container>
        </section>

        <footer className="text-center text-sm text-gray-500 py-6 bg-white border-t">
          © {new Date().getFullYear()} TechNova. All rights reserved.
        </footer>
      </main>
    </>
  )
}
