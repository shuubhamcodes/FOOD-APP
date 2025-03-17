import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams(); // ✅ Get restaurant ID from URL
    const [menu, setMenu] = useState([]); // ✅ Store menu items
    const [restaurant, setRestaurant] = useState(null); // ✅ Store restaurant details
    const [loading, setLoading] = useState(true); // ✅ Loading state

    // ✅ Fetch menu when resId changes
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                console.log(`Fetching menu for restaurant ID: ${resId}`);
                const response = await fetch(
                    `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId=${resId}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const json = await response.json();
                console.log("Full API Response:", json); // ✅ Log full response

                // ✅ Extract Restaurant Details
                const restaurantData = json?.data?.cards?.find(
                    (card) => card?.card?.card?.info
                )?.card?.card?.info;

                // ✅ Extract Menu Items
                const menuData = json?.data?.cards
                    ?.find((card) => card?.card?.card?.itemCards)
                    ?.card?.card?.itemCards?.map((item) => item.card.info) || [];

                console.log("Extracted Restaurant:", restaurantData);
                console.log("Extracted Menu Items:", menuData);

                setRestaurant(restaurantData); // ✅ Save restaurant info
                setMenu(menuData); // ✅ Save menu items
                setLoading(false); // ✅ Stop loading
            } catch (error) {
                console.error("Error fetching menu:", error);
                setLoading(false);
            }
        };

        fetchMenu(); // ✅ Calling fetch inside useEffect
    }, [resId]); // ✅ Runs only when resId changes

    return (
        <div className="restaurant-menu mx-auto min-h-screen w-auto p-2">
            {/* ✅ Show loading screen while data is being fetched */}
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    {/* ✅ Restaurant Summary */}
                    <div className="restaurant-summary flex h-52 justify-center align-middle overflow-y-hidden bg-slate-800 text-cyan-50">
                        <img
                            className="restaurant-img w-64 h-44 border-r-4 mt-4"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant?.cloudinaryImageId}`}
                            alt={restaurant?.name}
                        />
                        <div className="restaurant-summary-details flex flex-col m-5">
                            <h2 className="restaurant-title text-2xl max-w-lg text-opacity-70">
                                {restaurant?.name}
                            </h2>
                            <p className="restaurant-tags flex-nowrap opacity-70 text-base max-w-lg">
                                {restaurant?.cuisines?.join(", ")}
                            </p>
                            <p className="restaurant-rating">
                                ⭐ {restaurant?.avgRating} ({restaurant?.totalRatings} ratings)
                            </p>
                        </div>
                    </div>

                    {/* ✅ Menu Section */}
                    <div className="restaurant-menu-content flex justify-center p-3">
                        <div className="menu-items-container mt-2 max-w-3xl">
                            <div className="menu-title-wrap p-5">
                                <h3 className="menu-title text-zinc-600">Recommended</h3>
                                <p className="menu-count mt-2">{menu?.length} ITEMS</p>
                            </div>
                            <div className="menu-items-list flex justify-between flex-col">
                                {menu.length > 0 ? (
                                    menu.map((item) => (
                                        <div className="menu-item flex flex-col" key={item?.id}>
                                            <div className="menu-item-details">
                                                <h3 className="item-title flex flex-initial overflow-hidden text-2xl">
                                                    {item?.name}
                                                </h3>
                                                <p className="item-cost">
                                                    {item.price
                                                        ? `₹${item.price / 100}`
                                                        : "Price Not Available"}
                                                </p>
                                            </div>
                                            <div>
                                                <div className="flex justify-start text-gray-500">
                                                    {item?.description || "No description available."}
                                                </div>
                                            </div>
                                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                        </div>
                                    ))
                                ) : (
                                    <p>No items available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default RestaurantMenu;
