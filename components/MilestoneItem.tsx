import React from 'react'
import { IMilestone } from '../types'

function MilestoneItem({milestone}:{milestone:IMilestone}) {
    return (
        <li>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>{milestone.WebName}</div>
                <div>04/11/2022</div>
              </div>
            </li>
    )
}

export default MilestoneItem
