import React from 'react'

function Card({username ="Pamaraju Padmavathi",post="Senior Software Engineer"}) {
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"  alt="" width="384" height="512" src="https://th.bing.com/th?id=OIP.YAXlTjvtEKchdMVc5laZhwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        Experience of 7 years in IT
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
       {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
       {post}
      </div>
    </figcaption>
  </div>
</figure>
      
    </div>
  )
}

export default Card
