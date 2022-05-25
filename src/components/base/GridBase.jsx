import Grid from '@mui/material/Grid';

const GridBase = (props) =>{
  const {content, click} = props;

  const handleClickContent = (e ,index) =>{
    e.target.parentElement.setAttribute('key', index);
    if(click){
      click();
    }
    //console.log(e.target.parentElement.getAttribute('key'));
    //console.log(`click content`);
  };

  const contentGrid = (
    <Grid container spacing={4}>
      {
        content.map((value, index) =>{
          return (
            <Grid item xs={4} key={index} onClick={(e)=>{handleClickContent(e, index)}}>
              <div>
                content
              </div>
            </Grid>
          );
        })
      }
    </Grid>
  );

  return (
    <>
      {contentGrid}
    </>
  );
};

export default GridBase;