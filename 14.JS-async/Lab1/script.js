// Step 1: timeAgo
function timeAgo(timestamp) {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInMinutes = Math.floor((now - past) / (1000 * 60));
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  return `${Math.floor(diffInHours / 24)}d ago`;
}

// Step 2: viewCount
function viewCount(views) {
  return views >= 1000 ? `${Math.floor(views / 1000)}k` : views;
}

// Step 3: forumCategory
const allCategories = {
  1: { category: "HTML", className: "html" },
  2: { category: "CSS", className: "css" },
  3: { category: "JavaScript", className: "js" },
  299: { category: "Career Advice", className: "career" }
};
const forumCategoryUrl = "https://forum.freecodecamp.org/c";

function forumCategory(id) {
  const category = allCategories[id] || { category: "General", className: "general" };
  return `<a class="category ${category.className}" href="${forumCategoryUrl}/${category.className}/${id}">${category.category}</a>`;
}

// Step 4: avatars
const avatarUrl = "https://cdn.freecodecamp.org/forum";

function avatars(posters, users) {
  return posters.map(poster => {
    const user = users.find(u => u.id === poster.user_id);
    if (!user || !poster.avatar_template) return "";
    const template = poster.avatar_template.replace("{size}", "30");
    const src = template.startsWith("http") ? template : `${avatarUrl}${template}`;
    return `<img src="${src}" alt="${user.name}" />`;
  }).join("");
}

// Step 5: showLatestPosts
function showLatestPosts(data) {
  const users = data.users;
  const topics = data.topic_list.topics;
  const forumTopicUrl = "https://forum.freecodecamp.org/t/";

  const rows = topics.map(topic => {
    const topicUrl = `${forumTopicUrl}${topic.slug}/${topic.id}`;
    return `
      <tr>
        <td>
          <a class="post-title" href="${topicUrl}">${topic.title}</a>
          ${forumCategory(topic.category_id)}
        </td>
        <td>
          <div class="avatar-container">
            ${avatars(topic.posters, users)}
          </div>
        </td>
        <td>${topic.posts_count - 1}</td>
        <td>${viewCount(topic.views)}</td>
        <td>${timeAgo(topic.bumped_at)}</td>
      </tr>
    `;
  }).join("");

  document.getElementById("posts-container").innerHTML = rows;
}

// Step 6: fetchData
async function fetchData() {
  const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
