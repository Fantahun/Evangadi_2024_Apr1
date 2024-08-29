import AlertSection from './AlertSection';
import FirstHighlight from './FirstHighlight'
import SecondHighlight from './SecondHighlight'
import ThirdHighlight from './ThirdHighlight'
import FourthHighlight from './FourthHighlight'
import FifthHighlight from './FifthHighlight'
import SixthHighlight from './SixthHighlight';
import YoutubeVideos from '../YoutubeVideos/YoutubeVideos';


function Main() {
  return (
    <>
      <AlertSection/>
      <FirstHighlight/>
      <SecondHighlight/>
      <ThirdHighlight/>
      <FourthHighlight/>
      <FifthHighlight/>
    <SixthHighlight />

    {/* add the youtube videos component here */}
    <YoutubeVideos />
    </>
  );
}

export default Main;
