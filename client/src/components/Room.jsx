import React, { useState } from 'react';
import VideoList from './VideoList';
import Youtube from 'react-youtube';
import { Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react';
import Chat from './Chat'
// const getYoutubeID = require('get-youtube-id');

const Room = () => {
    const opts = {
        height: '500',
        width: '750',
        playerVars: {
            autoplay: 1
        }
    };

    const [Id, setId] = useState('');
    
    function queue(e) {
        setId(e.target.parentNode.parentNode.firstChild.value);
        e.target.parentNode.parentNode.firstChild.value = '';
    }

    return(
        <>
        <Chat position="absolute" right="0"></Chat>
            <div style={{margin: '0 auto',flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <h1>Welcome to the room!</h1>
                <label>Insert a YouTube video ID to queue</label>
                <div>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type='text'
                            placeholder='Enter ID'
                        />
                        <InputRightElement width='4.5rem' pr='5px'>
                            <Button onClick={queue} h='1.75rem' size='sm'>
                                Queue
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
                
                
                <Youtube videoId={Id} opts={opts} />
            </div>
            
            <VideoList videos= {[
    {
      "kind": "youtube#video",
      "etag": "_gHxukBAJ5q8W8I89AODWsrmtmQ",
      "id": "2g811Eo7K8U",
      "snippet": {
        "publishedAt": "2006-02-15T12:00:39Z",
        "channelId": "UCDungZ0A-_B-xJsBvylItIg",
        "title": "cat falling",
        "description": "dumbass cat falling",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2g811Eo7K8U/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2g811Eo7K8U/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2g811Eo7K8U/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "detachedsoul21",
        "tags": [
          "cats"
        ],
        "categoryId": "23",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "cat falling",
          "description": "dumbass cat falling"
        }
      }
    },
    {
      "kind": "youtube#video",
      "etag": "zAb-FpCmJzwE0EJy5RNPwjvPuQw",
      "id": "TpiOuBpfP2c",
      "snippet": {
        "publishedAt": "2021-07-28T14:45:01Z",
        "channelId": "UC9jtlMFkc_63Qor1jfgGT1g",
        "title": "Grid - Chakra UI",
        "description": "\"Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.\"\n\n\n\n\nTimestamps:\nIntro: \nDocs: \nCoding: \nOutro: \n\n\nGithub with my snippets:\nhttps://github.com/FOD17/Chakra-UI-Code-Snippets \n\n\n\n\nInstall:\nnpm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4\n\n\nor\n\n\nyarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4\n\n\nInstall Icons:\nnpm i @chakra-ui/icons\n\n\n# or\n\n\nyarn add @chakra-ui/icons\n\n\n\n\n\n\nIn future series/videos I record I promise to bump up the font size. Most tutorials I watch are on laptop/desktop, so I didn't think about coding videos for mobile. I'll do better.\n\n\n===================================\nYouTube (HomeAfterDark):\nhttps://www.youtube.com/channel/UCgJjB33I32JrFhvcn2XPOpg\n\n\nTwitch (HomeAfterDark):\nhttps://www.twitch.tv/homeafterdark\n\n\nTwitter:\nhttps://twitter.com/Therealmarkw1\n\n\nFacebook:\nhttps://www.facebook.com/people/Jesus-take-the-Compiler/100071020440456/\n\n\n\n\n\n\nLike. Sub. Share\n\n\nGraphics:\nAnvil Media Foundry\n\n\n#React #Chakra #Javascript",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/TpiOuBpfP2c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/TpiOuBpfP2c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/TpiOuBpfP2c/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/TpiOuBpfP2c/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/TpiOuBpfP2c/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Jesus, Take the Compiler",
        "tags": [
          "chakra ui",
          "chakra",
          "chakra ui react",
          "chakra ui tutorial",
          "chakra ui theme",
          "react chakra ui",
          "chakra ui responsive",
          "chakra ui react tutorial",
          "next js chakra",
          "react chakra",
          "chakra react",
          "chakra ui how to",
          "chakra ui guide",
          "chakra ui intro",
          "install chakra ui",
          "chakra ui install",
          "chakra ui dashboard",
          "chakra ui not working",
          "chakra ui components"
        ],
        "categoryId": "28",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Grid - Chakra UI",
          "description": "\"Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.\"\n\n\n\n\nTimestamps:\nIntro: \nDocs: \nCoding: \nOutro: \n\n\nGithub with my snippets:\nhttps://github.com/FOD17/Chakra-UI-Code-Snippets \n\n\n\n\nInstall:\nnpm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4\n\n\nor\n\n\nyarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4\n\n\nInstall Icons:\nnpm i @chakra-ui/icons\n\n\n# or\n\n\nyarn add @chakra-ui/icons\n\n\n\n\n\n\nIn future series/videos I record I promise to bump up the font size. Most tutorials I watch are on laptop/desktop, so I didn't think about coding videos for mobile. I'll do better.\n\n\n===================================\nYouTube (HomeAfterDark):\nhttps://www.youtube.com/channel/UCgJjB33I32JrFhvcn2XPOpg\n\n\nTwitch (HomeAfterDark):\nhttps://www.twitch.tv/homeafterdark\n\n\nTwitter:\nhttps://twitter.com/Therealmarkw1\n\n\nFacebook:\nhttps://www.facebook.com/people/Jesus-take-the-Compiler/100071020440456/\n\n\n\n\n\n\nLike. Sub. Share\n\n\nGraphics:\nAnvil Media Foundry\n\n\n#React #Chakra #Javascript"
        }
      }
    },
    {
      "kind": "youtube#video",
      "etag": "kchGloox0XWVh2Xo6-NLxgKXT-0",
      "id": "L7_jYl8A73g",
      "snippet": {
        "publishedAt": "2010-10-22T09:25:36Z",
        "channelId": "UChpJbg7zMbi5jx9Gdjaxa9g",
        "title": "Kanye West - Runaway (Extended Video Version) ft. Pusha T",
        "description": "Best of Kanye West: https://goo.gl/2FXUVW\nSubscribe here: https://goo.gl/AgJE59\n\n\nMusic video by Kanye West performing Runaway. (C) 2010 Roc-A-Fella Records, LLC",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/L7_jYl8A73g/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/L7_jYl8A73g/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/L7_jYl8A73g/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/L7_jYl8A73g/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/L7_jYl8A73g/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "KanyeWestVEVO",
        "tags": [
          "Kanye",
          "West",
          "Runaway",
          "Roc-a-Fella",
          "Records",
          "Hip",
          "Hop"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Kanye West - Runaway (Extended Video Version) ft. Pusha T",
          "description": "Best of Kanye West: https://goo.gl/2FXUVW\nSubscribe here: https://goo.gl/AgJE59\n\n\nMusic video by Kanye West performing Runaway. (C) 2010 Roc-A-Fella Records, LLC"
        },
        "defaultAudioLanguage": "en-US"
      }
    },
    {
      "kind": "youtube#video",
      "etag": "_qNivJb6H7Yewk0Gu6v8YWzaePw",
      "id": "8fK1kA9Q-3Y",
      "snippet": {
        "publishedAt": "2018-11-02T14:25:09Z",
        "channelId": "UCKC11MOR51CLg4JpYj8jb4g",
        "title": "Metro Boomin - Space Cadet (feat. Gunna) [OFFICIAL AUDIO]",
        "description": "NOT ALL HEROES WEAR CAPES available now: https://MetroBoomin.lnk.to/NAHWCYD\n\nFollow Metro Boomin Online:\nWebsite: http://www.metroboomin.net\nEmail List Sign Up: http://smarturl.it/MetroBoominSignUp\nInstagram: http://smarturl.it/MetroBoominInstagram\nTwitter: http://smarturl.it/MetroBoominTwitter\nFacebook: http://smarturl.it/MetroBoominFacebook\nSoundCloud: http://smarturl.it/MetroBoominSC\n\nFollow \"Metro Boomin: The Complete Collection\" playlist on Spotify for an updated list of Metro Boomin's biggest production credits: http://smarturl.it/MetroSpotifyComplete",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/8fK1kA9Q-3Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/8fK1kA9Q-3Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/8fK1kA9Q-3Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/8fK1kA9Q-3Y/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/8fK1kA9Q-3Y/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Metro Boomin",
        "tags": [
          "Metro Boomin",
          "young metro",
          "boominati",
          "NOT ALL HEROES WEAR CAPES",
          "Travis Scott",
          "21 Savage",
          "Gucci Mane",
          "Swae Lee",
          "Gunna",
          "Young Thug",
          "WizKid",
          "Offset",
          "J Balvin",
          "Kodak Black",
          "Drake"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Metro Boomin - Space Cadet (feat. Gunna) [OFFICIAL AUDIO]",
          "description": "NOT ALL HEROES WEAR CAPES available now: https://MetroBoomin.lnk.to/NAHWCYD\n\nFollow Metro Boomin Online:\nWebsite: http://www.metroboomin.net\nEmail List Sign Up: http://smarturl.it/MetroBoominSignUp\nInstagram: http://smarturl.it/MetroBoominInstagram\nTwitter: http://smarturl.it/MetroBoominTwitter\nFacebook: http://smarturl.it/MetroBoominFacebook\nSoundCloud: http://smarturl.it/MetroBoominSC\n\nFollow \"Metro Boomin: The Complete Collection\" playlist on Spotify for an updated list of Metro Boomin's biggest production credits: http://smarturl.it/MetroSpotifyComplete"
        }
      }
    },
    {
      "kind": "youtube#video",
      "etag": "V2W_xLtPc1T1WWOBUnlnSqNDCU4",
      "id": "YAaMRdYe9gY",
      "snippet": {
        "publishedAt": "2017-03-10T03:30:43Z",
        "channelId": "UCi-LzW_MRvCI8329s3Gd52A",
        "title": "Drowning (feat. Kodak Black)",
        "description": "Provided to YouTube by Highbridge The Label\n\nDrowning (feat. Kodak Black) · A Boogie Wit da Hoodie · Kodak Black\n\nDrowning (feat. Kodak Black)\n\n℗ 2017\n\nVocals: A Boogie Wit da Hoodie\nProducer, Programmer: Jahaan Sweet\nWriter: Artist Dubose\nWriter: Dieuson Octave\nWriter: Jahaan Sweet\n\nAuto-generated by YouTube.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YAaMRdYe9gY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YAaMRdYe9gY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YAaMRdYe9gY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/YAaMRdYe9gY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/YAaMRdYe9gY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "A Boogie Wit da Hoodie - Topic",
        "tags": [
          "A Boogie Wit da Hoodie",
          "Kodak Black",
          "Drowning (feat. Kodak Black)"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Drowning (feat. Kodak Black)",
          "description": "Provided to YouTube by Highbridge The Label\n\nDrowning (feat. Kodak Black) · A Boogie Wit da Hoodie · Kodak Black\n\nDrowning (feat. Kodak Black)\n\n℗ 2017\n\nVocals: A Boogie Wit da Hoodie\nProducer, Programmer: Jahaan Sweet\nWriter: Artist Dubose\nWriter: Dieuson Octave\nWriter: Jahaan Sweet\n\nAuto-generated by YouTube."
        }
      }
    },
    {
      "kind": "youtube#video",
      "etag": "umVrFtihCsgNZLU4Wv5t2cQ76Mk",
      "id": "VYOjWnS4cMY",
      "snippet": {
        "publishedAt": "2018-05-06T04:00:07Z",
        "channelId": "UCjYO25ZVJT523TD1iYHzcbw",
        "title": "Childish Gambino - This Is America (Official Video)",
        "description": "Official Video for \"This Is America\" by Childish Gambino\nListen to Childish Gambino: https://ChildishGambino.lnk.to/listenYD\nWatch more Childish Gambino videos: https://ChildishGambino.lnk.to/listenYD/youtube\n\nSubscribe to the official Childish Gambino YouTube channel: https://ChildishGambino.lnk.to/subscribeYD\n\nFollow Childish Gambino:\nFacebook: https://ChildishGambino.lnk.to/followFI/facebook\nInstagram: https://ChildishGambino.lnk.to/followII/instagram\nTwitter: https://ChildishGambino.lnk.to/followTI/twitter\nSpotify: https://ChildishGambino.lnk.to/followSI/spotify\nYouTube: https://ChildishGambino.lnk.to/subscribeYD\n\nChorus:\nThis is America\nDon't catch you slippin' now\nDon't catch you slippin' now\nLook what I'm whippin' now\nThis is America (Woo)\nDon't catch you slippin' now\nDon't catch you slippin' now\nLook what I'm whippin' now\n\nDirector: Hiro Murai\nProducer: Jason Cole of Doomsday with Ibra Ake and Fam Rothstein of Wolf + Rothstein\ntour tickets and merchandise available at childishgambino.com\n\n#ChildishGambino #ThisIsAmerica #GuavaIsland",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VYOjWnS4cMY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VYOjWnS4cMY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VYOjWnS4cMY/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/VYOjWnS4cMY/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/VYOjWnS4cMY/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "ChildishGambinoVEVO",
        "tags": [
          "this is america",
          "childish gambino",
          "this is america reaction",
          "this is america remix",
          "childish gambino this is america",
          "komik videolar😂 tik tok",
          "this is america childish gambino",
          "america",
          "meme songs",
          "meme song",
          "komik videolar",
          "slayy point",
          "polish cow",
          "this america",
          "this is america lyrics",
          "this is america meme",
          "this is america music video",
          "donald glover",
          "4th of July songs",
          "summer songs",
          "party songs",
          "yacht songs",
          "blm songs",
          "rap"
        ],
        "categoryId": "10",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "Childish Gambino - This Is America (Official Video)",
          "description": "Official Video for \"This Is America\" by Childish Gambino\nListen to Childish Gambino: https://ChildishGambino.lnk.to/listenYD\nWatch more Childish Gambino videos: https://ChildishGambino.lnk.to/listenYD/youtube\n\nSubscribe to the official Childish Gambino YouTube channel: https://ChildishGambino.lnk.to/subscribeYD\n\nFollow Childish Gambino:\nFacebook: https://ChildishGambino.lnk.to/followFI/facebook\nInstagram: https://ChildishGambino.lnk.to/followII/instagram\nTwitter: https://ChildishGambino.lnk.to/followTI/twitter\nSpotify: https://ChildishGambino.lnk.to/followSI/spotify\nYouTube: https://ChildishGambino.lnk.to/subscribeYD\n\nChorus:\nThis is America\nDon't catch you slippin' now\nDon't catch you slippin' now\nLook what I'm whippin' now\nThis is America (Woo)\nDon't catch you slippin' now\nDon't catch you slippin' now\nLook what I'm whippin' now\n\nDirector: Hiro Murai\nProducer: Jason Cole of Doomsday with Ibra Ake and Fam Rothstein of Wolf + Rothstein\ntour tickets and merchandise available at childishgambino.com\n\n#ChildishGambino #ThisIsAmerica #GuavaIsland"
        }
      }
    }
  ]} />
        </>
        
    )
    
};

export default Room;