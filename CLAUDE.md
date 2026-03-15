# CLAUDE.md — Forged by Growth

## Agile Loop Integration

All feature work flows through Agile Loop. Do not implement features directly.

- **New requirements:** Use `factory-ingest` MCP tool with the requirements text
- **Questions:** Use `factory-ask` MCP tool with the question
- **Sprint planning:** Use `factory-plan` MCP tool
- **Sprint execution:** Use `factory-execute` MCP tool with the sprint ID, then follow the action plan
- **Status check:** Use `factory-status` MCP tool

The Agile Loop MCP server is configured in `.claude/mcp.json`. All project data, sprints, stories, and telemetry are managed through Agile Loop.

## Project Context

- **Client:** Forged by Growth (startup private practice, life coaching)
- **Domains:** forgedbygrowth.com, forgedbygrowth.net
- **Tech:** Next.js 15 + Tailwind CSS + MDX + Vercel
- **Brand:** Anvil with green sprout, "Embrace. Adapt. Thrive.", colors #36452F / #1ACE4A, Montserrat font

## Coding Conventions

- Use `src/` directory structure (Next.js App Router)
- Tailwind CSS for all styling — no CSS modules
- Brand colors via CSS custom properties (`--brand-dark`, `--brand-green`)
- Static generation preferred — minimize client-side JavaScript
- Components in `src/components/`
- Pages in `src/app/<route>/page.tsx`
