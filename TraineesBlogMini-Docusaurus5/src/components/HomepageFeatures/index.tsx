import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '结构化',
        Svg: require('@site/static/img/undraw_structural.svg').default,
        description: (
            <>
                &nbsp;<code>TraineesBlog Mini</code>&nbsp;的设计无论从那方面开始都很容易理解和记忆,
                受大树的启发,通过自顶向下方式把知识以树形结构的形式来组织成文,避免了混乱和繁杂的内容,<br/>
                加快记忆和查询时间,降低学习和工作成本。
            </>
        ),
    },
    {
        title: '极简化',
        Svg: require('@site/static/img/undraw_concentration.svg').default,
        description: (
            <>
                &nbsp;<code>TraineesBlog Mini</code>&nbsp;的定位是只专注于编程领域的基础知识和场景应用的静态资源文档载体,开盖即食的懒人(高效)精神,减去繁杂的内容和功能,使得内容更加纯粹和营养。<br/>
            </>
        ),
    },
    {
        title: 'React',
        Svg: require('@site/static/img/undraw_react.svg').default,
        description: (
            <>
                通过React构建并不断重用扩展自定义的网站布局组件,
                让&nbsp;<code>TraineesBlog Mini</code>&nbsp;可以重复使用相同的页眉和页脚等进行扩展。
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
