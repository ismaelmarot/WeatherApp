import { writeFileSync, readFileSync, mkdirSync } from 'fs'

const { createBadge } = require('badge-maker') as { createBadge: (options: any) => string }
const coverageJsonPath = './coverage/lcov-report/coverage-summary.json'
const badgePath = './badges/coverage.svg'

try {
    const coverageSummary = JSON.parse(readFileSync(coverageJsonPath, 'utf-8'))
    const pct = coverageSummary.total.lines.pct

    const color =
      pct >= 90 ? 'brightgreen' :
      pct >= 75 ? 'yellowgreen' :
      pct >= 50 ? 'orange' :
      'red'

    const format = {
        label: 'Coverage',
        message: `${pct}%`,
        color,
        style: 'flat-square'
    }

    mkdirSync('./badges', { recursive: true })

    const svg = createBadge(format)
    writeFileSync(badgePath, svg)

    console.log(`✅ Badge actualizado: ${pct}%`)
} catch (e) {
    console.error('❌ No se pudo generar el badge. ¿Ejecutaste coverage?', e)
}