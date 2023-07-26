import { useEffect, useState } from 'react'
import { Posts, PostsData } from '../components/Posts'
import { Profile, UserData } from '../components/Profile'
import { Search } from '../components/Search'
import api from '../services/api'

export function Home() {
  const [userData, setUserData] = useState<UserData>()
  const [posts, setPosts] = useState<PostsData>()
  const [searchString, setSearchString] = useState('')

  function handleGetSearchString(str: string) {
    setSearchString(str)
  }

  useEffect(() => {
    async function loadUserData() {
      const user = await api.get('/users/legeannd')
      setUserData(user.data)
    }

    loadUserData()
  }, [])

  useEffect(() => {
    const delayLoadPosts = setTimeout(async () => {
      const posts = await api.get(
        `/search/issues?q=${searchString}%20repo:legeannd/github-blog`,
      )
      setPosts(posts.data)
    }, 500)

    return () => clearTimeout(delayLoadPosts)
  }, [searchString])
  return (
    <>
      <Profile user={userData} />
      <Search
        getSearchString={handleGetSearchString}
        postsCount={posts?.total_count || 0}
      />
      {posts && <Posts posts={posts} />}
    </>
  )
}
