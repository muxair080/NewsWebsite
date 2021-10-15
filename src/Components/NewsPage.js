import React, {useEffect , useState} from 'react'
import NewsItem from './NewsItem'
// import PropTypes from "prop-types";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner  from './Spinner'

 const NewsPage = (props)=>{
  const[articles , setarticles]=  useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  document.title = `TodayNews-${CapitalizeFirstLetter(props.category)}`;
     
   
      // capitalize First Letter of Category
      function CapitalizeFirstLetter(params) {
        return params.charAt(0).toUpperCase()+params.slice(1);  
    }
      const UpdateNews =  async ()=>{
        props.setProgress(30);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=786f42877f4e41fabf9791f1adaafa4e&page=1`;
        let data = await fetch(url);
        props.setProgress(60);
        let paresedata = await data.json()
        props.setProgress(80);
        setarticles(paresedata.articles);
        setloading(false);
        settotalResults(paresedata.totalResults);
        props.setProgress(100);
      }
      useEffect(() => {
        UpdateNews();
      }, [])
     
      const fetchMoreData = async() => {     
        
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=786f42877f4e41fabf9791f1adaafa4e&page=${page+1}`;
        setpage(page+1);
        
        setloading(true);
        let data = await fetch(url);
        let paresedata = await data.json();
        setarticles(articles.concat(paresedata.articles));
        setloading(false);
        settotalResults(paresedata.totalResults);
      
      
      };

        return (
            <div className='container '>
                <div className="text-center my-5 pt-5">
                    <h1><small className = 'bg-secondary border rounded-pill'>TODAY NEWS</small> TOP {props.category.toUpperCase()} HEADLINES</h1>
                </div>

              {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
                <div className="row">
                {

                    articles.map((element)=>{
                        return  <div className="col-md-4" key = {element.url}>
                             <NewsItem title ={element.title === null?'No title':element.title.length<=50?element.title:element.title.slice(0,40)+'...'}  description = {element.description === null?'No Descriptionn':element.description.length<=140?element.description:element.description.slice(0,150)+'...'} imgurl = {element.urlToImage} newsurl = {element.newsurl} author = {element.author} date = {element.publishedAt}/>
                        </div>
                         
                    })
                }
        </div>   
        </InfiniteScroll>  
            </div>
        )
    }



NewsPage.defaultProps = {
  country: "in",
  category: "general",
  PageSize: 5, 
};
NewsPage.propTypes = {
  country: PropTypes.string,
  PageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsPage;