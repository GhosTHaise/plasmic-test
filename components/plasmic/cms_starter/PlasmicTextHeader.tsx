// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nfrjG2YGbjnCxJhQdBiNtF
// Component: 9GSAxGuOXTlI

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Card from "../../Card"; // plasmic-import: tOrkWN3vZfCm/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: nfrjG2YGbjnCxJhQdBiNtF/projectcss
import sty from "./PlasmicTextHeader.module.css"; // plasmic-import: 9GSAxGuOXTlI/css

createPlasmicElementProxy;

export type PlasmicTextHeader__VariantMembers = {};
export type PlasmicTextHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicTextHeader__VariantsArgs;
export const PlasmicTextHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicTextHeader__ArgsType = {
  title?: string;
};
type ArgPropType = keyof PlasmicTextHeader__ArgsType;
export const PlasmicTextHeader__ArgProps = new Array<ArgPropType>("title");

export type PlasmicTextHeader__OverridesType = {
  root?: Flex__<"div">;
  card?: Flex__<typeof Card>;
  text?: Flex__<"div">;
};

export interface DefaultTextHeaderProps {
  title?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTextHeader__RenderFunc(props: {
  variants: PlasmicTextHeader__VariantsArgs;
  args: PlasmicTextHeader__ArgsType;
  overrides: PlasmicTextHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          title: " "
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Card
        data-plasmic-name={"card"}
        data-plasmic-override={overrides.card}
        className={classNames("__wab_instance", sty.card)}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"702px"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "card", "text"],
  card: ["card"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  card: typeof Card;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTextHeader__VariantsArgs;
    args?: PlasmicTextHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTextHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTextHeader__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTextHeader__ArgProps,
          internalVariantPropNames: PlasmicTextHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTextHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextHeader";
  } else {
    func.displayName = `PlasmicTextHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicTextHeader = Object.assign(
  // Top-level PlasmicTextHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    card: makeNodeComponent("card"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicTextHeader
    internalVariantProps: PlasmicTextHeader__VariantProps,
    internalArgProps: PlasmicTextHeader__ArgProps
  }
);

export default PlasmicTextHeader;
/* prettier-ignore-end */
