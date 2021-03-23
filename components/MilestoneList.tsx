import React from 'react'
import { IMilestone } from '../types'
import MilestoneItem from './MilestoneItem'

function MilestoneList({ milestones }: { milestones: IMilestone[] }) {
  return (
    <section id="milestones" className=" bg-blue-100 p-4">
      <h2 className="uppercase text-2xl font-bold mb-2">Milestones</h2>
      <ul className="space-y-4">
        {milestones.map((milestone) => (
          <MilestoneItem key={milestone.MilestoneWebId} milestone={milestone} />
        ))}
      </ul>
    </section>
  )
}

export default MilestoneList
