//Homework
// A square 
rt (90);
for (let i= 0; i < 4; i++)
 { 
   fd (50);
   lt (90);
 }


//An equilateral triangle
rt (90);
for (let i=0; i<3 ; i++)
{
    fd(100);
    lt (120);
}


// A circle

rt (90);
for (let i=0; i< 36; i++)
{
  fd (10);
  lt (10);
}


// Multi-circles

rt(30);
for (let j=0; j < 6; j++)
{
    rt (60);
    for (let i=0; i< 36; i++)
    {
      fd (10);
      lt (10);
    }
}
rt (60);


