import React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  role?: string
  message?: string
}

const Email = ({ name, email, role, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New website inquiry from {name || 'a website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New website inquiry</Heading>
        <Text style={p}>Someone reached out through the NXTSteps website contact form.</Text>
        <Section style={card}>
          <Text style={detail}>
            <strong>Name:</strong> {name || 'Not provided'}
          </Text>
          <Text style={detail}>
            <strong>Email:</strong> {email || 'Not provided'}
          </Text>
          <Text style={detail}>
            <strong>I am a:</strong> {role || 'Not provided'}
          </Text>
          <Hr style={hr} />
          <Text style={detail}>
            <strong>Message:</strong>
          </Text>
          <Text style={messageText}>{message || 'No message provided.'}</Text>
        </Section>
        <Text style={footer}>
          Reply directly to this email to respond to {name || 'them'} at {email || 'the address above'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New website inquiry from ${data?.['name'] || 'a website visitor'}`,
  displayName: 'Contact form — owner notification',
  to: 'inquiries@nxtsteps.dev',
  previewData: {
    name: 'Jane Rivera',
    email: 'jane@example.com',
    role: 'Educator or school',
    message: 'We would love to schedule a demo for our transition program.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 25px', maxWidth: '560px', margin: '0 auto' }
const heading = { fontSize: '24px', fontWeight: 700, color: '#3B4FC0', margin: '0 0 12px' }
const p = { fontSize: '15px', lineHeight: '22px', color: '#2A2F4A' }
const card = { backgroundColor: '#EAF3F7', borderRadius: '12px', padding: '16px 20px' }
const detail = { fontSize: '14px', lineHeight: '21px', color: '#2A2F4A', margin: '0 0 6px' }
const messageText = { fontSize: '15px', lineHeight: '23px', color: '#2A2F4A', whiteSpace: 'pre-line' as const }
const hr = { borderColor: '#CBD8DE', margin: '12px 0' }
const footer = { fontSize: '13px', lineHeight: '19px', color: '#6B7590', marginTop: '16px' }
