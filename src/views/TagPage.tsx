import Layout from "components/Layout";
import EditTag from "components/tagPage/EditTag";
import NotFound from "components/tagPage/NotFound";
import React from "react";
import { useParams } from "react-router-dom";
import useTags from "useTags";

type Params = {
  id: string;
};

const TagPage: React.FC = () => {
  const { id } = useParams<Params>();
  const { findTag } = useTags();
  const tag = findTag(id);
  return (
    <Layout>
      {tag && <EditTag />}
      {!tag && <NotFound />}
    </Layout>
  );
};

export default TagPage;
