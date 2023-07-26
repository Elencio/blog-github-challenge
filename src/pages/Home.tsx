import { useEffect, useState } from 'react'


import api from '../services/api'
import { Posts, PostsData } from '../components/Post'
import { Profile, UserData } from '../components/Profile'
import { Search } from '../components/Search'

export function Home() {
  const [userData, setUserData] = useState<UserData>()
  const [posts, setPosts] = useState<PostsData>()
  const [searchString, setSearchString] = useState('')

  function handleGetSearchString(str: string) {
    setSearchString(str)
  }

  useEffect(() => {
    async function loadUserData() {
      const user = await api.get('/users/elencio')
      setUserData(user.data)
    }

    loadUserData()
  }, [])

  useEffect(() => {
    const delayLoadPosts = setTimeout(async () => {
      const posts = await api.get(
        `/search/issues?q=${searchString}%20repo:elencio/blog-github-challenge`,
      )
      setPosts(posts.data)
    }, 50)

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
