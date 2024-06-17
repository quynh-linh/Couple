import React from 'react';
import Timeline from '@mui/lab/Timeline';
import classNames from 'classnames/bind';
import styles from './ModernTimeline.module.scss';
import ModernTimelineEvent from './ModernTimelineEvent';

const cx = classNames.bind(styles);
const DataModernTimeline = [
    {
        id: '1',
        date: 'Ngày 26 tháng 04 năm 2023',
        title: 'First Date',
        subtitle: '(On a beautiful evening at the cafe)',
        description:
            'On the evening of April 26, 2023, under a serene night sky, two hearts found themselves at a quaint cafe, embarking on a magical first date. The soft glow of dim lights intertwined with the aroma of freshly brewed coffee, creating an atmosphere that whispered of possibilities. Amidst shared laughter and heartfelt conversations, they discovered common interests and dreams, forging a bond that felt both familiar and exhilaratingly new. Time seemed to pause as they exchanged stories, their eyes reflecting a growing connection under the gentle moonlight. This evening marked the beginning of a journey filled with hope, anticipation, and the promise of many more cherished moments together.',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/couple-85135.appspot.com/o/IMG_4964.JPG?alt=media&token=dcac4dbb-60ae-4888-a7ac-99682bf1bf9e',
        imgAlt: 'First Date',
        position: 'right',
    },
    {
        id: '2',
        date: 'Ngày 09 tháng 08 năm 2023',
        title: 'Travel to Vung Tau',
        subtitle: '(Went by motorbike at 10 am with nice weather)',
        description:
            'Nestled along Vietnam scenic coastline, Vung Tau beckons with its tranquil charm and inviting seascape. A getaway to this coastal gem promises moments of serenity and culinary delight. Imagine strolling along the sun-kissed shores, waves gently lapping at your feet as you indulge in crispy fried fish balls and sip on aromatic coffee by the beach. Vung Tau is allure extends beyond its sandy beaches; it is a haven for seafood enthusiasts. Savour the freshness of local delicacies like succulent grilled squid and briny oysters, each dish a testament to the region is rich maritime bounty. As evening falls, the sea breeze carries whispers of relaxation, a perfect backdrop for recounting tales and forging cherished memories. Vung Tau, where every moment is a feast for the senses and a celebration of coastal splendour.',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/couple-85135.appspot.com/o/1d7fc2326c8698e8bf2206d32b5d941d.jpg?alt=media&token=5cefb461-ffc9-402c-a95d-95426445383d',
        imgAlt: 'Travel to Vung Tau',
        position: 'left',
    },
    {
        id: '3',
        date: 'Ngày 26 tháng 10 năm 2023',
        title: '6 Months Anniversary',
        description:
            'Six months into our journey together, we celebrated with a memorable evening at a charming Korean restaurant. The cozy ambiance and savory aromas welcomed us as we savored crispy fried chicken with a delightful crunchy corn coating. Each bite was a celebration of our growing bond, filled with laughter and shared stories. Later, we ventured to a nearby cafe with a breathtaking view, where city lights shimmered like stars against the night sky. Sipping on aromatic teas, we reminisced about our favorite moments and dreams for the future. The beauty of the evening mirrored the beauty of our relationship, each moment etched in our hearts as a testament to love and companionship.',
        subtitle: '(Go eat at a Korean restaurant)',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/couple-85135.appspot.com/o/IMG_9574.jpg?alt=media&token=b10d7c1a-c46e-4f6c-a857-ca59b89f1a2e',
        imgAlt: '6 Months Anniversary',
        position: 'right',
    },
    {
        id: '4',
        date: 'Ngày 26 tháng 04 năm 2024',
        title: 'One year of knowing each other',
        subtitle: '(Go for a drink at a restaurant with a rooftop view)',
        description:
            'On our first anniversary together, we decided to celebrate with a delightful evening starting at a rooftop café with stunning city views. As we sipped on refreshing drinks under the twinkling evening sky, we reflected on our journey over the past year—filled with laughter, challenges, and cherished moments. The city lights formed a mesmerizing backdrop to our conversation, highlighting the beauty of the moment. Following our drinks, we ventured to a cozy restaurant renowned for its grilled beef, a place we discovered through a TikTok video. The aroma of sizzling meat filled the air as we settled into a cozy corner, exchanging glances filled with affection and reminiscing about our favorite memories together. The tender beef, perfectly seasoned and grilled to perfection, served as a delicious symbol of our enduring love and shared adventures. As the evening unfolded, we toasted to many more years of happiness and exploration, grateful for the serendipitous moments that brought us closer and excited for the future yet to unfold.',
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/couple-85135.appspot.com/o/IMG_0489.jpg?alt=media&token=8d35f5c4-1474-4f35-9971-e32259e24bea',
        imgAlt: 'One year of knowing each other',
        position: 'left',
    },
];
const OppositeContentTimeline: React.FC = () => {
    return (
        <div className={cx('modernTimeLine')}>
            <div className="text-center">
                <h1 className={cx('modernTimeLine-title')}>Câu Chuyện</h1>
            </div>
            <Timeline position="alternate">
                {DataModernTimeline.map((item: any) => {
                    return (
                        <ModernTimelineEvent
                            key={item.id}
                            date={item.date}
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                            imgSrc={item.imgSrc}
                            imgAlt={item.imgAlt}
                            position={item.position}
                        />
                    );
                })}
            </Timeline>
        </div>
    );
};

export default OppositeContentTimeline;
