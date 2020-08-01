import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';

function YouTubeIframeResponsive({ youtubeID }) {
  
  
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://www.youtube.com/embed/ntE5Jmsol70?end=10`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; end;"
        allowFullScreen
        onEnded={()=> { alert('Funcionou') }}
        data-ready="true"
      />
    </VideoContainer>
  );

   
}

export default YouTubeIframeResponsive;




// function VideoCardGroup({
//   ignoreFirstVideo,
//   category,
// }) {
//   const categoryTitle = category.titulo;
//   const categoryColor = category.cor;
//   const categoryExtraLink = category.link_extra;
//   const videos = category.videos;
//   return (
//     <VideoCardGroupContainer>
//       {categoryTitle && (
//         <>
//           <Title style={{ backgroundColor: categoryColor || 'red' }}>
//             {categoryTitle}
//           </Title>
//           {categoryExtraLink && 
//             <ExtraLink href={categoryExtraLink.url} target="_blank">
//               {categoryExtraLink.text}  
//             </ExtraLink>
//           }
//         </>
//       )}
//       <VideoCardList>
//         {videos.map((video, index) => {
//           if (ignoreFirstVideo && index === 0) {
//             return null;
//           }

//           return (
//             <li key={video.titulo}>
//               <VideoCard
//                 videoTitle={video.titulo}
//                 videoURL={video.url}
//                 categoryColor={categoryColor}
//               />
//             </li>
//           );
//         })}
//       </VideoCardList>
//     </VideoCardGroupContainer>
//   );
// }

// export default VideoCardGroup;
