import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icon from '../atoms/Icon'
import Text from '../atoms/Text'
import formatDate from '../../libs/date'
import TagsList from '../molecules/TagsList'
import TextLink from '../atoms/TextLink'
import Title from '../atoms/Title'

export type PostCardProps = {
  title: string
  description: string
  slug: string
  catchImageUrl: string
  createdAt: string
  updatedAt?: string
  tags: string[]
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  slug,
  catchImageUrl,
  createdAt,
  tags,
}) => {
  return (
    <Fragment>
      <div className="px-4 py-8 w-full md:max-w-md">
        <div className="bg-gray-100 dark:bg-gray-700 shadow-2xl rounded-lg mb-6 tracking-wide">
          <div className="md:flex-shrink-0 cursor-pointer">
            <Link href={`/posts/${slug}`} passHref>
              <div className="rounded-t-lg overflow-hidden">
                <Image
                  className="transform hover:scale-125 duration-200"
                  width={640}
                  height={360}
                  src={catchImageUrl}
                  alt="catch"
                  priority={true}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between mx-6 mt-2">
            <div className="flex items-center text-gray-500 dark:text-gray-300">
              <Icon className="fas fa-clock" />
              <Text className="ml-2">{formatDate(createdAt)}</Text>
            </div>
          </div>
          <div className="px-4 py-2">
            <Title type="h2" className="tracking-normal md:h-16">
              <TextLink
                className="text-gray-700 dark:text-gray-100 hover:underline"
                href={`/posts/${slug}`}
              >
                {title.length >= 70 ? `${title.slice(0, 70)}...` : title}
              </TextLink>
            </Title>
            <Text className="px-2 mr-1 md:h-24">
              {description.length >= 100
                ? `${description.slice(0, 100)}...`
                : description}
            </Text>
          </div>
          <TagsList allTags={tags} />
        </div>
      </div>
    </Fragment>
  )
}
export default PostCard
