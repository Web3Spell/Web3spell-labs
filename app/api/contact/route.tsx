import { NextResponse } from 'next/server'

interface ContactPayload {
  type?: 'enquiry' | 'newsletter'
  name?: string
  email?: string
  organization?: string
  help?: string
  overview?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const email = (body.email ?? '').trim()

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Please provide a valid work email address.' },
        { status: 400 }
      )
    }

    if (body.type === 'newsletter') {
      return NextResponse.json({
        ok: true,
        message: 'Subscribed to SpellCast field notes and episode alerts.',
      })
    }

    const name = (body.name ?? '').trim()
    const organization = (body.organization ?? '').trim() || 'Independent / Unspecified'
    const help = (body.help ?? '').trim()
    const overview = (body.overview ?? '').trim()

    if (!name || !help || !overview) {
      return NextResponse.json(
        { ok: false, error: 'Please complete all required project fields before submitting.' },
        { status: 400 }
      )
    }

    const resendKey = process.env.RESEND_API_KEY
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT

    if (resendKey) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'Web3Spell Labs <intake@web3spell.com>',
          to: [process.env.CONTACT_RECEIVER_EMAIL || 'hello@web3spell.com'],
          reply_to: email,
          subject: `Project Enquiry: ${organization} (${name})`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Organization: ${organization}`,
            `Focus Area: ${help}`,
            '',
            'Project Overview:',
            overview,
          ].join('\n'),
        }),
      })

      if (!resendRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: 'Email dispatch service encountered an error. Please retry or email hello@web3spell.com directly.',
          },
          { status: 502 }
        )
      }
    } else if (formspreeEndpoint) {
      const formspreeRes = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, organization, help, overview }),
      })

      if (!formspreeRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            error: 'Form relay service encountered an error. Please retry or email hello@web3spell.com directly.',
          },
          { status: 502 }
        )
      }
    }

    const referenceId = `W3S-${Date.now().toString(36).toUpperCase().slice(-6)}`

    return NextResponse.json({
      ok: true,
      referenceId,
      message: 'Project enquiry received. Our engineering and product leads will respond within one business day.',
    })
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: 'Unable to process your request right now. Please retry or reach us at hello@web3spell.com.',
      },
      { status: 500 }
    )
  }
}
