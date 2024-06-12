'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import { ArcherContainer, ArcherElement } from 'react-archer';
import styles from '../Profile.module.scss';
import images from '@/assets/images';
import { dataProfileLeft, dataProfileRight } from '@/mock/dataProfile';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/router';
const cx = classNames.bind(styles);

interface ArcherProfilesProps {
    updateParams: (newId: string) => void;
}
export default function ArcherProfiles({ updateParams }: ArcherProfilesProps) {
    const params = useParams<{ id: string }>();
    const [idSelected, setIdSelected] = useState<string>('');

    const handleMouseEnter = (id: string) => {
        setIdSelected(id);
    };

    const handleMouseLeave = () => {
        setIdSelected('');
    };

    return (
        <div className={cx('profile', 'mt-9 mb-12')}>
            <ArcherContainer style={{ width: '100%' }} strokeColor="red">
                <div style={{ display: 'flex' }}>
                    {/* LEFT */}
                    <div className={cx('profile-parent')}>
                        {dataProfileLeft.map((item: any, index: number) => {
                            return (
                                <ArcherElement
                                    key={index}
                                    id={item.id}
                                    relations={[
                                        {
                                            targetId: item.relations.targetId,
                                            targetAnchor: item.relations.targetAnchor,
                                            sourceAnchor: item.relations.sourceAnchor,
                                            style: { strokeColor: 'black', strokeWidth: 1.5 },
                                        },
                                    ]}
                                >
                                    <div
                                        className={cx('profile-parent-child', 'ml-6  my-2')}
                                        onMouseEnter={() => handleMouseEnter(item.id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div
                                            className={cx(
                                                'profile-parent-child-content',
                                                'pt-4 p-4',
                                                idSelected !== '' && item.id != idSelected
                                                    ? 'profile-parent-child-contentSelected'
                                                    : '',
                                            )}
                                        >
                                            <h1 className={cx('text-sm font-semibold')}>
                                                {params.id === 'men'
                                                    ? item.content.men.title
                                                    : item.content.women.title}
                                            </h1>
                                            <p className={cx('text-xs mt-2 font-medium')}>
                                                {params.id === 'men'
                                                    ? item.content.men.description
                                                    : item.content.women.description}
                                            </p>
                                        </div>
                                    </div>
                                </ArcherElement>
                            );
                        })}
                    </div>
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ArcherElement id="root">
                            <div>
                                <div className="flex items-center justify-center mb-4">
                                    <p
                                        className={cx(
                                            'text-xl font-bold hover:cursor-pointer',
                                            params.id === 'men' ? 'text-red-700' : 'text-gray-500',
                                        )}
                                        onClick={() => updateParams('men')}
                                    >
                                        Men
                                    </p>
                                    <p className="mx-2">|</p>
                                    <p
                                        className={cx(
                                            'text-xl font-bold hover:cursor-pointer',
                                            params.id === 'women' ? 'text-red-700' : 'text-gray-500',
                                        )}
                                        onClick={() => updateParams('women')}
                                    >
                                        Women
                                    </p>
                                </div>
                                {params.id === 'men' ? (
                                    <Image className={cx('profile-img')} src={images.men} alt="Men" />
                                ) : (
                                    <video className={cx('profile-img')} width={300} height={500} autoPlay muted loop>
                                        <source
                                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/videos/Women.mp4`}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        </ArcherElement>
                    </div>
                    {/* RIGHT */}
                    <div className={cx('profile-parent')}>
                        {dataProfileRight.map((item: any, index: number) => {
                            return (
                                <ArcherElement
                                    key={index}
                                    id={item.id}
                                    relations={[
                                        {
                                            targetId: item.relations.targetId,
                                            targetAnchor: item.relations.targetAnchor,
                                            sourceAnchor: item.relations.sourceAnchor,
                                            style: { strokeColor: 'black', strokeWidth: 1.5 },
                                        },
                                    ]}
                                >
                                    <div
                                        className={cx('profile-parent-child', 'mr-6  my-2')}
                                        onMouseEnter={() => handleMouseEnter(item.id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div
                                            className={cx(
                                                'profile-parent-child-content',
                                                'pt-4 p-4',
                                                idSelected !== '' && item.id != idSelected
                                                    ? 'profile-parent-child-contentSelected'
                                                    : '',
                                            )}
                                        >
                                            <h1 className={cx('text-sm font-semibold')}>
                                                {params.id === 'men'
                                                    ? item.content.men.title
                                                    : item.content.women.title}
                                            </h1>
                                            <p className={cx('text-xs mt-2 font-medium')}>
                                                {params.id === 'men'
                                                    ? item.content.men.description
                                                    : item.content.women.description}
                                            </p>
                                        </div>
                                    </div>
                                </ArcherElement>
                            );
                        })}
                    </div>
                </div>
            </ArcherContainer>
        </div>
    );
}
