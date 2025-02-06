import { motion,useScroll } from 'motion/react'
import './App.css'

function App() {
  const scrollYProgress = useScroll().scrollYProgress

  return (
    <div>
      <motion.div
        drag
        whileDrag={{
          scale:0.7
        }}
        dragConstraints={{
          left:0,
          top:0,
          right:1000,
          bottom:0
        }}
        initial = {{
          x:100,
          y:100
        }}
        animate = {{
          x:1000,
          y:400,
          rotate:360
        }} 
        className='bg-blue-400 h-60 w-60'
        transition={{delay:1, duration:3}}
      >
        <h2>Box 1</h2>
      </motion.div>

      <motion.h1
        animate={{
          x:800,
          rotate:360
        }}

        whileHover={{
          scale:0.9
        }}

        transition={{
          delay:1,
          duration:3
        }}
        >Hi, I'am Vipin
      </motion.h1>

      {/* Key frame Animation */}
      <motion.div 
        animate = {{
          x:[0,500,500,0,0],
          y:[0,0,200,200,0],
          rotate:[0,360,0,-360,0]
        }}

        drag
        transition={{
          duration:4
        }}
        className='bg-red-400 h-60 w-60'
      >

      </motion.div>

      <motion.div className='bg-green-600 w-full origin-left h-5 fixed top-0' style={{scaleX:scrollYProgress}}></motion.div>

      <div className='p-8 mt-40'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ut architecto. Modi eum, maiores facere quod maxime tenetur? Iste tenetur ipsa fugit quia sint voluptatem itaque eius repellendus hic, excepturi totam rem a facilis placeat debitis officia magnam illo dolorem. Nemo enim id cupiditate sunt? Neque esse similique molestias provident, dignissimos porro dolore, quisquam, laborum dolores aut soluta aliquid? Ea voluptatem autem nesciunt consequuntur praesentium in ab vitae obcaecati recusandae, id fuga voluptatibus quasi molestiae unde, quia dignissimos dolore facere molestias tenetur. Officiis nemo expedita harum perspiciatis consectetur maxime aliquam, fuga saepe minima aperiam officia sequi pariatur eaque a quod, nesciunt obcaecati esse autem consequatur atque dolorum accusamus sit. Earum, maiores. Commodi nemo omnis, nam debitis officia quidem? Quas repellat laboriosam, excepturi aliquid nostrum est delectus esse similique, maxime illum laborum dolorem veritatis reiciendis officia nam cum libero aliquam voluptas doloribus quae at mollitia? Eligendi, ab hic. Ex maxime magnam expedita ipsam nobis minima sequi voluptas ad nam sed officia nesciunt eius, sit iste atque sapiente voluptate commodi laboriosam consectetur eveniet vel. Magni officia iure excepturi distinctio obcaecati ducimus dignissimos consequatur, similique in, ullam assumenda doloribus tempora optio magnam sapiente repellat porro ut velit earum, nemo hic deleniti. Qui, fugiat.</p> <br /><br />
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo corrupti sequi eius quia, pariatur vitae molestias a ut? Minus cum officia voluptatibus rem architecto nam numquam, cupiditate rerum deserunt doloribus est ea laboriosam. Earum exercitationem maiores quia nobis! Voluptates vitae optio velit explicabo illo blanditiis? Quidem obcaecati delectus rem unde ipsa temporibus perspiciatis error amet sapiente ea totam deleniti sunt cumque minus ab quos modi non, dolorum laudantium corporis ipsum, hic mollitia tempore! Ab eligendi dolor nesciunt iste, doloremque, non, magni voluptatum natus quas eaque similique! Non asperiores odit expedita repudiandae perferendis voluptatum, voluptatem alias! Placeat libero veniam magnam deserunt, obcaecati beatae repellendus, adipisci ea eaque quo quae a hic numquam! Nihil facilis eaque vel similique eos provident nesciunt veniam mollitia, quaerat at unde architecto aliquam, fuga eius quas fugiat? Magnam debitis optio aliquid excepturi! Obcaecati aspernatur ut magnam enim, voluptatem at incidunt nam libero rerum magni? Cupiditate quaerat unde, laudantium autem ad molestiae corporis assumenda necessitatibus porro voluptas totam tempora, possimus eum expedita odit recusandae sapiente aliquam? Veritatis cumque repellendus, maxime placeat, sint consequatur praesentium ipsa recusandae molestias hic id a blanditiis, numquam modi. Necessitatibus, cum itaque. Hic adipisci veniam aut quidem placeat dolorum, molestias animi labore? Adipisci, ad voluptates nostrum sapiente fuga ut nihil eveniet expedita delectus assumenda debitis officiis impedit omnis incidunt, aspernatur eum temporibus iusto reiciendis minima vitae. Incidunt mollitia similique possimus magnam molestias ducimus hic eum sed vel ullam! Consectetur quibusdam magni qui! Laudantium incidunt perferendis quo cumque quas eligendi modi, eius repellat ullam veniam accusantium sequi, ipsa dolorum dicta vitae, sunt soluta dolores ea numquam maxime quis non ut illum adipisci? Libero similique itaque distinctio rerum suscipit consequuntur hic officia. Reiciendis necessitatibus natus ratione quisquam expedita eius ut molestias alias officia quaerat veritatis ipsam molestiae architecto nostrum consequuntur impedit vitae cupiditate, ipsum eaque laborum?</p> <br /><br />
         <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae provident nihil facilis hic minima pariatur, ducimus eum, optio doloribus architecto reiciendis fugiat omnis! Totam sed ipsum corporis sint rem accusamus temporibus earum voluptate corrupti provident! Sapiente soluta ipsam iure maxime inventore porro quam tempore nesciunt atque! Possimus voluptatem eius rerum provident in sint id labore reiciendis praesentium, placeat enim architecto ipsum est optio neque natus. Sit impedit quod blanditiis ut provident quam rerum perferendis expedita at tempora iste quidem alias, nulla, doloribus corporis autem non ullam dolore tenetur accusamus illo optio dolor. Accusantium quis et debitis accusamus possimus pariatur repellendus earum numquam corporis neque sapiente illum, laborum laboriosam officiis cumque placeat exercitationem ipsam magni, tempora corrupti facere illo asperiores ea? Quae quis eos odio aliquid fuga, placeat quod soluta non consequatur totam ipsum voluptatem sint molestiae animi enim quo magni libero ipsam facere? Laudantium ad odit incidunt rem in accusamus repudiandae nemo cupiditate maxime, harum cum quaerat labore ipsum perspiciatis quidem perferendis quasi dolorum. Maiores quae facilis possimus magnam impedit optio. Debitis rerum totam blanditiis deserunt provident fuga. Magni, laborum! Odio nisi ullam officia ipsa debitis, commodi ipsum autem laboriosam blanditiis veritatis eveniet dicta, architecto, at incidunt placeat illo aspernatur vel fugiat adipisci. Est, quibusdam odit consequatur voluptatem quae rerum voluptatibus cupiditate maiores beatae corrupti similique velit hic quod quasi quam, eius nam facere aperiam ipsam distinctio consectetur ab facilis officia. Nostrum at laborum illo sit delectus corrupti neque quaerat architecto voluptate blanditiis in quis voluptas incidunt fugiat obcaecati, deleniti similique sed esse! Nam reiciendis eos illo accusamus possimus nesciunt molestiae nulla eligendi. Temporibus, tempora perferendis eaque veritatis corporis illum? Minus dolor at beatae rerum cum odit distinctio unde officia veniam consectetur laudantium et quis ducimus, modi quaerat excepturi vitae dicta earum, autem provident suscipit. Nesciunt labore eius ea blanditiis.</p>
      </div>

    </div>
  )
}

export default App
