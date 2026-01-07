// PATTERN 1 //

// 1
// 2 1 
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1 

for(let i=1;i<=5;i++)
{
    let line="";
    for(j=i;j>=1;j--)
    {
        line = line + j + " ";
    }
    console.log(line);
}


  // PATTERN 2 //

// 1 
// 1 2
// 1 2 3
// 1 2 3 4 
// 1 2 3 4 5

for(let i=1;i<=5;i++)
{
    let line="";
    for(j=i;j<=1;j++)
    {
        line = line + j + " ";
    }
    console.log(line);
}


  // PATTERN 3 //

// 5 4 3 2 1
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5

for(let i=1;i<=5;i++)
{
    let line="";
    for(j=6-i;j>=1;j--)
    {
        line = line + j + " ";
    }
    console.log(line);
}


  // PATTERN 4 //

// 1 1 1 1 1 
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4 
// 5 5 5 5 5

for(let i=1;i<=5;i++)
{
    let line="";
    for(j=5;j>=1;j--)
    {
        line = line + i + " ";
    }
    console.log(line);
}

