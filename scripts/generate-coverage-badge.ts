import { writeFileSync, readFileSync } from 'fs'
// ⚡ Esto funciona siempre en TypeScript

const { createBadge } = require('badge-maker') as { createBadge: (options: any) => string }
const coverageJsonPath = './coverage/lcov-report/coverage-summary.json'
const badgePath = './badges/coverage.svg'

try {
    const coverageSummary = JSON.parse(readFileSync(coverageJsonPath, 'utf-8'))
    const pct = coverageSummary.total.lines.pct

    const format = {
        label: 'Coverage',
        message: `${pct}%`,
        color: pct > 90 ? 'brightgreen' : pct > 70 ? 'green' : pct > 50 ? 'orange' : 'red',
        style: 'flat-square'
    }

    const svg = createBadge(format)

    require('fs').mkdirSync('./badges', { recursive: true })

    writeFileSync(badgePath, svg)
    console.log(`✅ Badge actualizado: ${pct}%`)
} catch (e) {
    console.error('❌ No se pudo generar el badge. ¿Ejecutaste coverage?', e)
}