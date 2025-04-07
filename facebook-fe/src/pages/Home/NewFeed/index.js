import classNames from 'classnames/bind';
import styles from './NewFeed.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function NewFeed({ data, onLikePost }) {
    const [likePost, setLikePost] = useState(false);

    const handleLikePost = (e) => {
        setLikePost(!likePost);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <img src={`data:image/*;base64,${data?.avatar}`} alt={data?.username} className={cx('avatar')} />
                <div className={cx('account-time')}>
                    <p className={cx('account')}>{data?.username}</p>
                    <p className={cx('time')}>{data.created_at}</p>
                </div>
            </div>
            <div className={cx('content')}>
                <p className={cx('text')}>{data.caption}</p>
            </div>
            <div className={cx('likes-comments')}>
                <div className={cx('likes')}>
                    <img
                        className={cx('x16dsc37')}
                        height="18"
                        role="presentation"
                        src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                        width="18"
                        alt=""
                    />
                    <p className={cx('number')} style={{ marginLeft: '8px' }}>
                        {data.likes}
                    </p>
                </div>
                <div className={cx('comments')}>
                    <p className={cx('number')} style={{ marginRight: '8px' }}>
                        {data.comments}
                    </p>
                    <i
                        data-visualcompletion="css-img"
                        className={cx('"x1b0d499 x1d69dk1"')}
                        style={{
                            backgroundImage:
                                'url("https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4NiOlPNDLVJ.png?_nc_eui2=AeFke9YZnNFm89MK_bH0U0CboWm93t4ckWChab3e3hyRYO9ylqNUpVixc5JYsOMsOAI6iBh43zwdwNCO-5Qm4SIf")',
                            backgroundPosition: '0px -1386px',
                            backgroundSize: 'auto',
                            width: '16px',
                            height: '16px',
                            backgroundRepeat: 'no-repeat',
                            display: 'inline-block',
                        }}
                    ></i>
                </div>
            </div>
            <div className={cx('likes-comments-actions')}>
                <div className={cx('likes-btn', 'action-btn')} onClick={handleLikePost}>
                    <div className={cx('btn-wrapper')}>
                        {likePost ? (
                            <i
                                onClick={(e) => onLikePost(e)}
                                data-visualcompletion="css-img"
                                className={cx('x1b0d499 xq8hly8')}
                                style={{
                                    backgroundImage:
                                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/o2KCW4cFG6l.png?_nc_eui2=AeHOJIgM4wXaKczDi6weaij9xh0ziHQFXU_GHTOIdAVdT8qfBUUz85ZGeANK_I9Zxf5zF0MGTTti9NpOcVouBPwN")',
                                    backgroundPosition: '0px -641px',
                                    backgroundSize: 'auto',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                    filter: 'invert(19%) sepia(70%) saturate(5671%) hue-rotate(203deg) brightness(96%) contrast(101%)',
                                }}
                            ></i>
                        ) : (
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 x1d69dk1"
                                style={{
                                    backgroundImage:
                                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4NiOlPNDLVJ.png?_nc_eui2=AeFke9YZnNFm89MK_bH0U0CboWm93t4ckWChab3e3hyRYO9ylqNUpVixc5JYsOMsOAI6iBh43zwdwNCO-5Qm4SIf")',
                                    backgroundPosition: '0px -739px',
                                    backgroundSize: 'auto',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        )}

                        <span
                            className={cx('btn-text', {
                                liked: likePost,
                            })}
                        >
                            Thích
                        </span>
                    </div>
                </div>
                <div className={cx('comments-btn', 'action-btn')}>
                    <div className={cx('btn-wrapper')}>
                        <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 x1d69dk1"
                            style={{
                                backgroundImage:
                                    'url("https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/4NiOlPNDLVJ.png?_nc_eui2=AeFke9YZnNFm89MK_bH0U0CboWm93t4ckWChab3e3hyRYO9ylqNUpVixc5JYsOMsOAI6iBh43zwdwNCO-5Qm4SIf")',
                                backgroundPosition: '0px -550px',
                                backgroundSize: 'auto',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}
                        ></i>
                        <span className={cx('btn-text')}>Bình luận</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewFeed;
