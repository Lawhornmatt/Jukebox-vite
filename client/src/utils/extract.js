// Credit to Benjam from StackOverflow found here for the regex expression: 
// https://stackoverflow.com/questions/6903823/regex-for-youtube-id
const myregexp = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;

// Might be old? Same author
// /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi

export function extractYTid(youtubeURL) {
    return myregexp.exec(youtubeURL)[1];
};