function grade(score)
{
    switch (true) {
        case score >= 90:
            console.log(" Grade is A");
            break;  
        case score >= 80:
            console.log(" Grade is B");
            break;      
            default:
            console.log(" Grade is C");
    }   
}
grade(85);