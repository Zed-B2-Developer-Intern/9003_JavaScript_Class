"use client"
import Head from 'next/head'
import { Container, Typography, Card, CardContent, Button } from '@mui/material'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About TechNova</title>
      </Head>

      <main className="bg-white text-gray-800">
        <section className="bg-gray-100 py-20 px-4">
          <Container maxWidth="lg" className="text-center flex flex-col items-center">
            <Typography variant="h2" className="font-bold mb-6">
              About TechNova
            </Typography>
            <Typography variant="h6" className="max-w-3xl mx-auto">
              We are a team of engineers, thinkers, and builders passionate about solving real-world business problems using Java and cloud technology.
            </Typography>
          </Container>
        </section>

        <section className="py-20 px-4 bg-white">
          <Container maxWidth="md" className='space-y-2! flex flex-col items-center'>
            <Typography variant="h4" className="text-center font-semibold mb-12">
              Our Mission
            </Typography>
            <Typography variant="body1" className="max-w-2xl mx-auto text-center">
              To empower startups and enterprises by delivering modern, maintainable, and high-performing software solutions using scalable cloud and backend architecture.
            </Typography>
          </Container>
        </section>

        <section className="py-20 px-4 bg-gray-50 space-y-2">
          <Container maxWidth="md">
            <Typography variant="h4" className="text-center font-semibold mb-12">
              What We Do
            </Typography>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {[
                {
                  title: 'Custom Java Development',
                  desc: 'From REST APIs to backend systems, we specialize in writing clean, efficient Java code tailored to your business.',
                },
                {
                  title: 'Cloud-Native Applications',
                  desc: 'We build cloud-first architectures using Kubernetes, Docker, and scalable AWS/GCP infrastructure.',
                },
                {
                  title: 'Enterprise Modernization',
                  desc: 'We help legacy systems evolve by refactoring and modernizing codebases and architecture.',
                },
                {
                  title: 'Tech Consulting',
                  desc: 'Our experts offer architecture guidance, code reviews, and project planning for complex systems.',
                },
              ].map((service, idx) => (
                <Card key={idx} className="p-6">
                  <CardContent>
                    <Typography variant="h6" className="mb-2">{service.title}</Typography>
                    <Typography variant="body2">{service.desc}</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 px-4 bg-white">
          <Container maxWidth="lg" className="text-center flex flex-col items-center space-y-3!">
            <Typography variant="h4" className="font-semibold mb-6">
              Our Culture
            </Typography>
            <Typography variant="body1" className="max-w-2xl mx-auto mb-8">
              We believe in clean code, continuous learning, open collaboration, and delivering what we promise. Every line of code is written with quality and impact in mind.
            </Typography>
            <Button variant="contained" color="primary" href="/">
              Back to Home
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
