import { createStore } from 'vuex';
const store = createStore({
    state() {
        return {
            memories: [
                { 
                    id: 'm1', 
                    image: 'https://www.stokedtotravel.com/wp-content/uploads/2020/04/IMG_4426-800x1067.jpg',
                    title: 'Trip to Miami', 
                    description: 'It was a really nice trip',
                },
                { 
                    id: 'm2', 
                    image: 'https://www.dotwnews.com/modules/image_resize/image_resize.php?image=/uploads/posts/19589.jpg&width=860&height=468&cropratio=860:468',
                    title: 'Surfing The Sea Side', 
                    description: 'Feeling the cool breeze',
                },
                { 
                    id: 'm3', 
                    image: 'https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2-1024x643.png',
                    title: 'Good Eating', 
                    description: 'Really Tasty',
                },
            ],
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id == memoryId);
            };
        }
    }
});

export default store;
