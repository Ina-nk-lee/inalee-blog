'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false })

    const renderMermaid = async () => {
      if (ref.current) {
        try {
          const uniqueId = `mermaid-${Date.now()}`
          const { svg } = await mermaid.render(uniqueId, chart)
          ref.current.innerHTML = svg
        } catch (err) {
          console.error('Mermaid render error:', err)
        }
      }
    }

    renderMermaid()
  }, [chart])

  return <div ref={ref} />
}
