import React, { Fragment } from 'react'
import Icon from '../atoms/Icon'
import Tag from '../atoms/Tag'

export type TagsListProps = {
  selectedTags?: string[]
  allTags?: string[]
}

const TagsList: React.FC<TagsListProps> = ({ selectedTags, allTags }) => {
  return (
    <Fragment>
      <div className="flex flex-wrap items-center mx-4 pb-2 text-gray-500 dark:text-gray-300">
        <Icon className="fas fa-tags" />
        {allTags &&
          allTags.map((tag, idx) => {
            return (
              <Tag
                key={idx}
                selected={selectedTags && selectedTags.includes(tag)}
              >
                {tag}
              </Tag>
            )
          })}
      </div>
    </Fragment>
  )
}
export default TagsList
